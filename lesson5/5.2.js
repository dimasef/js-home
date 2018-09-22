"use strict";

/*
  Composition:

  Задание при помощи композиции создать объекты 4х типов:

  functions:
    - MakeBackendMagic
    - MakeFrontendMagic
    - MakeItLooksBeautiful
    - DistributeTasks
    - DrinkSomeTea
    - WatchYoutube
    - Procrastinate

  BackendDeveloper = MakeBackendMagic + DrinkSomeTea + Procrastinate
  FrontendDeveloper = MakeFrontendMagic + DrinkSomeTea + WatchYoutube
  Designer = MakeItLooksBeautiful + WatchYoutube + Procrastinate
  ProjectManager = DistributeTasks + Procrastinate + DrinkSomeTea

  ProjectManager(name,gender,age) => { name, gender, age, type: 'project', rate: '15/h'}

*/


	const MakeBackendMagic = (obj) => ({
		makeBackendMagic: () => console.log(obj.name + ' make backend magic')
	});	 

	const MakeFrontendMagic = (obj) => ({
		makeFrontendMagic: () => console.log(obj.name + ' make frontend magic')
	});	  

	const MakeItLooksBeautiful = (obj) => ({
		makeItLooksBeautiful: () => console.log(obj.name + ' give me colored felt-tip!')
	});	 
	
	const DistributeTasks = (obj) => ({
		distributeTasks: () => console.log(obj.name + ' tasks for everyone!!!')
	});	

	const DrinkSomeTea = (obj) => ({
		drinkSomeTea: () => console.log(obj.name + ' in the world there is not enough chamomile tea')
	});	

	const WatchYoutube = (obj) => ({
		watchYoutube: () => console.log(obj.name + ' watch the video')
	});	

	const Procrastinate = (obj) => ({
		procrastinate: () => console.log(obj.name + ' everything is almost ready! Just that something does not work = /')
	});

	// BackendDeveloper constructor
	const BackendDeveloper = (name, gender, age) => {
		let particularQualities = {
			name,
			gender,
			age,
			type: 'backend',
			rate: '20/h'

		};
		return Object.assign(
			{},
			MakeBackendMagic(particularQualities),
			DrinkSomeTea(particularQualities),
			Procrastinate(particularQualities)
		);
	};

	// FrontendDeveloper constructor
	const FrontendDeveloper = (name, gender, age) => {
		let particularQualities = {
			name,
			gender,
			age,
			type: 'frontend',
			rate: '18/h'

		};
		return Object.assign(
			{},
			MakeFrontendMagic(particularQualities),
			DrinkSomeTea(particularQualities),
			WatchYoutube(particularQualities)
		);
	};

	// Designer constructor
	const Designer = (name, gender, age) => {
		let particularQualities = {
			name,
			gender,
			age,
			type: 'designer',
			rate: '12/h'

		};
		return Object.assign(
			{},
			MakeItLooksBeautiful(particularQualities),
			WatchYoutube(particularQualities),
			Procrastinate(particularQualities)
		);
	};

	// ProjectManager constructor
	const ProjectManager = (name, gender, age) => {
		let particularQualities = {
			name,
			gender,
			age,
			type: 'mp',
			rate: '25/h'

		};
		return Object.assign(
			{},
			DistributeTasks(particularQualities),
			DrinkSomeTea(particularQualities),
			Procrastinate(particularQualities)
		);
	};



