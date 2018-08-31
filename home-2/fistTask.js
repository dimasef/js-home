"use strict";

(function () {
	const Ingredients = [
		'Булка',
		'Огурчик',
		'Котлетка',
		'Бекон',
		'Рыбная котлета',
		'Соус карри',
		'Кисло-сладкий соус',
		'Помидорка',
		'Маслины',
		'Острый перец',
		'Капуста',
		'Кунжут',
		'Сыр Чеддер',
		'Сыр Виолла',
		'Сыр Гауда',
		'Майонез'
	  ];

	let menu = [];
	function Burger(name, composition, cookingTime) {
		this.name = name;
		this.composition = composition;
		this.cookingTime = cookingTime;
	}

	Burger.prototype.showComposition = function(){
		let {composition, name, cookingTime} = this;
		let compositionLength = composition.length;
		if( compositionLength !== 0){
			composition.map( function( item ){
				console.log( 'Состав бургера', name, item );
			});
		}
	};

	let Hamburger = new Burger('Hamburger', ['Булка','Котлетка','Сыр Гауда', 'Огурчик','Капуста','Помидорка'], 20);
	let Cheeseburger = new Burger('Cheeseburger', ['Булка','Сыр Чеддер','Сыр Гауда','Капуста','Кунжут'], 10);
	let Fishburger = new Burger('Fishburger', ['Булка','Рыбная котлета','Сыр Виолла','Острый перец','Маслины'], 30);

	menu.push(Hamburger, Cheeseburger, Fishburger);
	console.log('menu: ', menu);

	function Order(name, condition, value) {
		this.name = name;
		this.condition = condition;
		this.value = value;
	}

	Order.prototype.showStatus = function() {
		let {name, condition, value} = this;
		if(name) {
			menu.map(function(item){
				if(item.name === name) {
					console.log(`Бургер ${item.name}, будет готов через ${item.cookingTime} минут`);
				}
			});
		} else if(name === '' && condition === 'has') {
			menu.map(function(item){
				if(item.composition.includes(value)) {
					console.log(`Бургер ${item.name}, будет готов через ${item.cookingTime} минут`);
				}
			});
		} else if(name === '' && condition === 'except') {
			let badStatus = 0;
			menu.map(function(item) {
				if(!item.composition.includes(value)) {
					console.log(`Бургер ${item.name}, будет готов через ${item.cookingTime} минут`);
				} else  ++badStatus;
			});
			if(menu.length === badStatus) {
				let randomBurger = Math.floor(Math.random() * menu.length);
				console.log(`К сожалению, такого бургера у нас нет, можете попробовать "${menu[randomBurger].name}"`);
			}
		}
	};

	let order1 = new Order("Hamburger");
	let order2 = new Order("", 'has', 'Сыр Чеддер');
	let order3 = new Order("", 'except', 'Сыр Гауда');
	let order4 = new Order("", 'except', 'Булка');
	
	order1.showStatus();
	order2.showStatus();
	order3.showStatus();
	order4.showStatus();


})();

