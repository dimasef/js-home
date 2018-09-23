/*

  Задание:
    1. Используя функциональный декоратор, написать декоратор который будет показывать
       аргументы и результат выполнения функции.
*/

let doSomethingStrange = (...strangeSymbols) => {
  	let supperStrange = strangeSymbols.reduce((aught, partOfAught) => {
      	return aught + partOfAught;
  	}, 0);
  	return supperStrange + '$$$';
}

let decorator = wrapped => {
  	return function() {
      	const result = wrapped.apply(this, arguments);
      	return console.log("Arguments: ", ...arguments, " Result: ", result);
  	}
}

const wrapped = decorator(doSomethingStrange);

wrapped('/-/-/', '___', "|-|-");

/*
2. Написать декоратор для класса, который будет преобразовывать аргументы в число,
если они переданы строкой, и выводить ошибку если переданая переменная не
может быть преобразована в число
*/


function checkNumDecorator( target, key, descriptor ) {
    const originFunction = descriptor.value.bind(this);
    descriptor.value = function( ...args ) {
		args.map(item => {
			if(!isNaN(Number(item))) {
				console.log(`${item} успешно преобразовано в ${Number(item)}`);
			}
			else throw "Невозможно преобразовать к числу";
		});
      	return this;
    }
}

class CoolMath {
	@checkNumDecorator;
	addNumbers(a,b){ return a + b; }

	@checkNumDecorator;
	multiplyNumbers(a,b){ return a * b}
	
	@checkNumDecorator;
	minusNumbers(a,b){ return a - b }
}
const Calcul = new CoolMath();
let x = Calcul.addNumbers(2, 2)
let y = Calcul.multiplyNumbers(10, 2)
let z = Calcul.minusNumbers(10, 2)
console.log(x, y, z);

  