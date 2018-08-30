"use strict";
document.querySelector(".home-2").style.display = 'block';

(function () {
	
	let getJsonFromUrl = (path, success, error) => {
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if (xhr.readyState === XMLHttpRequest.DONE) {
				if (xhr.status === 200) {
					if (success) success(JSON.parse(xhr.responseText));
				} else {
					if (error) error(xhr);
				}
			}
		};
		xhr.open("GET", path, true);
		xhr.send();
	}

	let showAdressCompany = (btn, data) => {
		let companyAdressPlace = document.querySelector(".companyAdress"),
			adressObj = {};
			console.log( btn )
			btn.onclick = () => {
				adressObj = data.find(elem => elem._id === btn.dataset.id).address;
				companyAdressPlace.innerHTML = `<b>Country:</b> ${adressObj.country}, <b>City:</b> ${adressObj.city}, 
				<b>State:</b> ${adressObj.state}, <b>Street:</b> ${adressObj.street}, <b>House:</b> ${adressObj.house}, 
				<b>ZIP:</b> ${adressObj.zip}.`;
			};
	
	};

	let renderEmpoyerTable = employersObj => {
		let employersTablePlace = document.querySelector(".employers-list");
		employersTablePlace.innerHTML = "";
		document.querySelector(".error-message").innerHTML = "";
		employersObj.forEach(employer => {
			let contacts = employer.emails.concat(employer.phones).join("; <br>");
			employersTablePlace.innerHTML += `<tr>
				<td><span>${employer.name}</span></td>
				<td>${employer.gender}</td>
				<td>${employer.age}</td>
				<td class="contact-block">${contacts}</td>
			</tr>`;
		});
	};

	let employerSorting = (btn, data, fild) => {
		if(btn.dataset.sort === "0") {
			let newData = Object.assign([], data);
			renderEmpoyerTable(newData.sort((a,b) => {
				return (a[fild] < b[fild]) ? -1 : 1;
			}));
			btn.dataset.sort = "1";
			btn.querySelector("span").className = 'sorted';
		} else {
			let newData = Object.assign([], data);
			renderEmpoyerTable(newData.sort((a,b) => {
				return (a[fild] > b[fild]) ? -1 : 1;
			}));
			btn.dataset.sort = "0";
			btn.querySelector("span").className = '';
		}
	};

	let showCompanyEmployers = (btn, data) => {
		let employersTablePlace = document.querySelector(".employers-list"),
		employersObj = {};
		btn.forEach(item => {
			item.onclick = () => {
				document.querySelector(".company").style.display = 'none';
				document.querySelector(".employers").style.display = 'block';

				document.querySelector(".find-employer").dataset.companyid = item.dataset.id;
				document.querySelector(".companyName").innerHTML = `${item.dataset.company}`;
				employersObj = data.find(elem => elem._id === item.dataset.id).employers;
				renderEmpoyerTable(employersObj);

				let genderSort = document.querySelector(".gender-sort"),
					ageSort = document.querySelector(".age-sort"),
					findEmpoyer = document.querySelector(".find-employer");

				document.querySelector(".back").onclick = () => {
					document.querySelector(".employers").style.display = 'none';
					document.querySelector(".company").style.display = 'block';
				}
				ageSort.onclick = () => { employerSorting(ageSort, employersObj, 'age') };

				genderSort.onclick = () => { employerSorting(genderSort, employersObj, 'gender') };

				findEmpoyer.onclick = () => {
					let name = document.querySelector(".employer-name").value;
					let employer = [employersObj.find(elem => elem.name === name)];
					if(+employer === 0) 
						document.querySelector(".error-message").innerHTML = "There is no such employee!";
					else {
						document.querySelector(".error-message").innerHTML = "";
						renderEmpoyerTable(employer);
					}
				};
			};
		});
	};

	let showCompanyTable = data => {
		document.querySelector(".company-list").innerHTML = "";
		data.forEach(item => {
			let fragment = document.createElement('tr');
			fragment.innerHTML += `
				<td><span>${item.company}</span></td>
				<td>${item.balance}</td>
				<td>${item.registered}</td>
				<td>${item.employers.length}</td>
				<td>
					<button class="show-adress" data-id="${item._id}">Address</button><br>
					<button class="show-employer" data-company="${item.company}" data-id="${item._id}">Employees</button>
				</td>
			`;

			let btn = fragment.querySelector('.show-adress');
			console.log( fragment, btn )
			showAdressCompany( btn, data);

			document.querySelector(".company-list").appendChild(fragment)
		});
		
		showCompanyEmployers(document.querySelectorAll(".show-employer"), data);
	};

	getJsonFromUrl('http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2',
        data => { 
			showCompanyTable(data);
			console.log(data);
			let balanceSort = document.querySelector(".balance-sort"),
				employersSort = document.querySelector(".employers-sort");

			balanceSort.onclick = () => {
				let newData = {};
				if(balanceSort.dataset.sort === "0") {
					newData = Object.assign([], data);
					let sortedArray = newData.sort((a,b) => {
						return (a.balance < b.balance) ? -1 : 1;
					})
					showCompanyTable();
					balanceSort.dataset.sort = "1";
					balanceSort.querySelector("span").className = 'sorted';
				} else {
					newData = Object.assign([], data);
					showCompanyTable(newData.sort((a,b) => {
						return (a.balance > b.balance) ? -1 : 1;
					}));
					balanceSort.dataset.sort = "0";
					balanceSort.querySelector("span").className = '';
				}
			};

			employersSort.onclick = () => {
				let newData = {};
				if(employersSort.dataset.sort === "0") {
					newData = Object.assign([], data);
					showCompanyTable(newData.sort((a,b) => {
						return (a.employers.length < b.employers.length) ? -1 : 1;
					}));
					employersSort.dataset.sort = "1";
					employersSort.querySelector("span").className = 'sorted';
				} else {
					newData = Object.assign([], data);
					showCompanyTable(newData.sort((a,b) => {
						return (a.employers.length > b.employers.length) ? -1 : 1;
					}));
					employersSort.dataset.sort = "0";
					employersSort.querySelector("span").className = '';
				}
			};
		},
		xhr => { console.error(xhr); }
	);
})();