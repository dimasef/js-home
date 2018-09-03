"use strict";

(function () {

	let compSort = document.getElementById("company-sort");
	let balancepSort = document.getElementById("balance-sort");

	const _showAdress = Symbol('_showAdress');
	const _showDateReg = Symbol('_showDateReg');
	
	class Company {
		constructor (data) {
			this.data = data;

			this[_showAdress] = this[_showAdress].bind(this);
			this[_showDateReg] = this[_showDateReg].bind(this);
			this.sort = this.sort.bind(this);
		}

		[_showAdress] (event) {
			let companyAdressPlace = document.getElementById("companyAdress");
			let id = event.path[0].dataset.id;
			let adressObj = this.data.find(elem => elem._id === id).address;

			companyAdressPlace.innerHTML = `<b>Country:</b> ${adressObj.country}, <b>City:</b> ${adressObj.city}, 
				<b>State:</b> ${adressObj.state}, <b>Street:</b> ${adressObj.street}, <b>House:</b> ${adressObj.house}, 
				<b>ZIP:</b> ${adressObj.zip}.`;
		}

		[_showDateReg] (event) {
			let showDateReg = document.getElementById("companyDateReg");
			let id = event.path[0].dataset.id;
			let regDate = this.data.find(elem => elem._id === id).registered;

			showDateReg.innerHTML = `Компания была зарегистрирована: ${regDate}`;
		}

		showCompanyTable (isSorted) {
			let companyTable = document.getElementById("company-list"); 

			if(isSorted) 
				companyTable.innerHTML = "";
			
			let fragment = document.createDocumentFragment();

			let data = (isSorted) ? arguments[1] : this.data;
			data.map(item => {
				let tr = document.createElement('tr');
				tr.innerHTML += `
					<tr>
						<td><span>${item.company}</span></td>
						<td>${item.balance}</td>
						<td>
							<button class="show-adress" data-id="${item._id}">Показать адресс</button><br>
							<button class="show-date-reg" data-company="${item.company}" data-id="${item._id}">Показать дату регистрации</button>
						</td>
					</tr>
				`;
				fragment.appendChild(tr);

				let ShowAdressBtn = tr.querySelector('.show-adress'),
					ToggleShowDateRegBtn = tr.querySelector('.show-date-reg');

				ShowAdressBtn.addEventListener('click', this[_showAdress] );
				ToggleShowDateRegBtn.addEventListener('click', this[_showDateReg] );
			});
			companyTable.appendChild(fragment);
		}

		sort (event) {
			let fild = event.path[0];
			let sortFild = fild.dataset.fild;

			if(fild.dataset.sort === "0") {
				this.showCompanyTable(true, Object.assign([], this.data)
					.sort((a,b) => {
						return (a[sortFild] > b[sortFild]) ? -1 : 1
					})
				);

				fild.dataset.sort = "1";
				fild.querySelector("span").className = 'sorted';
			} else {
				this.showCompanyTable(true, Object.assign([], this.data)
					.sort((a,b) => {
						return (a[sortFild] < b[sortFild]) ? -1 : 1
					})
				);

				fild.dataset.sort = "0";
				fild.querySelector("span").className = '';
			}
		}
	}
	async function getJsonData(){
		const data = await fetch("http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2");
		return await data.json();
	}	

	getJsonData().then( data => {
		let company = new Company(data);
		
		company.showCompanyTable();

		compSort.addEventListener('click', company.sort);
		balancepSort.addEventListener('click', company.sort);
	});

})();

