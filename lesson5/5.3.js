"use strict";

/*

  Используя методы для создания объектов из задания по композиции написать фабрику (HeadHunt), которая будет
  расспределять и создавать сотрудников компании нужного типа.

  Данные для списка сотрудников: http://www.json-generator.com/api/json/get/cfeTmcNIXS?indent=2

  HeadHunt => {
    hire( obj ){
      ...
    }
  }

  Привязать к интерфейсу и вывести на страницу. На кнопку нанять повесить метод hire из фабрики

*/
const html = document.getElementById("main");

class Persons {
	show(data) {
		let personTable = html.querySelector(".person-list")
		let fragment = document.createDocumentFragment();
		data.map(pers => {
			let tr = document.createElement('tr');
			tr.innerHTML += `<tr>
				<td><span>${pers.name} (${pers.age})</span></td>
				<td>${pers.type}</td>
				<td>
					<button class="hire" data-id="${pers._id}">Нанять</button><br>
				</td>
			</tr>`;
			fragment.appendChild(tr);
			let hireBtn = tr.querySelector('.hire');

			hireBtn.addEventListener('click', () => {
				let emploer = new HeadHunt().hire(pers);
				emploer.makeFrontendMagic();
			});
		});
		personTable.appendChild(fragment);
	}
}

class HeadHunt {
	hire( obj ){
		let newEmp;
		if( obj.type === 'backend'){
			newEmp = BackendDeveloper(obj.name, obj.gender, obj.age);
		}
		if( obj.type === 'frontend'){
			newEmp = FrontendDeveloper(obj.name, obj.gender, obj.age);
		}
		if( obj.type === 'design'){
			newEmp = Designer(obj.name, obj.gender, obj.age);
		}
		if( obj.type === 'project'){
			newEmp = ProjectManager(obj.name, obj.gender, obj.age);
		}
		return newEmp;
	}
}

async function getJsonData() {
  const data = await fetch("http://www.json-generator.com/api/json/get/cfeTmcNIXS?indent=2");
  return await data.json();
}	

getJsonData().then( data => {
	let applicant = new Persons();
	applicant.show(data);
});
