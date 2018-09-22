"use strict";

let constFunc = () => {
    //Данные
    const _governmentData = {
        laws: [],
        budget: 1000000,
        citizensSatisfactions: 50
    };

    const governmentMethods = {
        addLaw: data => {
            _governmentData.laws.push(data);
            _governmentData.citizensSatisfactions -= 10;
        },
        readConstitution: () => {
            console.log(_governmentData.laws);
        },
        readLaw: id => {
            console.log(_governmentData.laws[id]);
        },
        showLevelSatisfactions: () => {
            console.log(_governmentData.citizensSatisfactions);
        },
        showBudget: () => {
            console.log(_governmentData.budget);
        },
        letsFun: () => {
            _governmentData.budget -= 50000;
            _governmentData.citizensSatisfactions += 5;
        },
    };
    return Object.freeze(governmentMethods);;
}

const single = constFunc();

const SingletonDemo = () => {
    single.addLaw({id: 0, name: 'some law name', description: 'some law description'});
    single.addLaw({id: 1, name: 'some law name1', description: 'some law description1'});
    single.addLaw({id: 2, name: 'some law name2', description: 'some law description2'});

    single.readConstitution();
    single.readLaw(2);

};
SingletonDemo();