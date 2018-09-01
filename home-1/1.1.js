"use strict";
document.querySelector(".home-1").style.display = 'block';

const ITEA_COURSES = ["Курс HTML & CSS", "JavaScript базовый курс", "JavaScript продвинутый курс", "JavaScript Professional", "Angular 2.4 (базовый)", "Angular 2.4 (продвинутый)", "React.js", "React Native", "Node.js", "Vue.js"];

(function () {
	let html = document.getElementById("mainBlock"),
		btn = document.getElementById("search-btn");
		
	/* 1. При помощи методов изложеных в arrays.js , 
	 переформатировать ITEA_COURSES в массив который содержит длину строк каждого из элементов. */
	
	let iteaCoursesLengths = ITEA_COURSES.map( function( courses ) {
		return courses.length;
	});
	console.log( "Task 1.1 ", iteaCoursesLengths );

	/* 2. Самостоятельно изучить метод Array.sort. Отфильтровать массив ITEA_COURSES по алфавиту.
	  + Бонусный бал. Вывести на страничку списком */
	let iteaCoursesSorted = ITEA_COURSES;
	iteaCoursesSorted.sort().forEach( (item) => {
		html.querySelector("ul").innerHTML += `<li>${item}</li>`
	});

	/* 3. Реализация функции поиска по массиву ITEA_COURSES.
      + Бонусный бал. Вывести на страничку инпут и кнопку по которой будет срабатывать поиск. */
	let checkCours = cours => {
		return cours == document.querySelector(".input-fild").value;
	};
	btn.onclick = () => {
		let resultString = (ITEA_COURSES.find(checkCours) === undefined) ? 'Такого курса нет.' : 'Даный курс есть!';
		document.getElementById("resupt-place").innerHTML = resultString;
	};

})();
