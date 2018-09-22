"use strict";

const trafficLight = document.querySelectorAll(".trafficLight");

let Start = new CustomEvent("start", {
    detail: {
    	username: "trafficLight"
    }
});

let Stop = new CustomEvent("stop", {
    detail: {
    	username: "trafficLight"
    }
});

let Night = new CustomEvent("night", {
    detail: {
    	username: "trafficLight"
    }
});

document.addEventListener('DOMContentLoaded', function() {
	trafficLight.forEach(item => {
		let clicked = true;
		let middle = item.querySelectorAll(".trafficLight__circle")[1];
		middle.addEventListener("night", function(e) {
			e.target.classList.add("night");
		});
		middle.dispatchEvent(Night);

		item.addEventListener("stop", function(e) {
			e.target.classList.add("start");
			e.target.classList.remove("stop");
			clicked = !clicked;
		});
		item.addEventListener("start", function(e) {
			e.target.classList.add("stop");
			e.target.classList.remove("start");
			clicked = !clicked;
		});
		item.onclick = function() {
			if(clicked) {
				this.dispatchEvent(Stop);
			}
			else {
				this.dispatchEvent(Start);
			}
		}
	});

	const startNight = document.getElementById("Do");
	startNight.addEventListener('click', function() {
		trafficLight.forEach(item => {
			item.classList.remove("stop");
			item.classList.remove("start");
		});
	});
});








