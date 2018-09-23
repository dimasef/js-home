/*
  Написать медиатор для группы студентов.

  Профессор отвечает только на вопросы старосты.

  У Студента есть имя и группа которой он пренадлежит.
  Он может запросить старосту задать вопрос или получить ответ.

  Староста может добавлять студентов в группу и передавать вопрос профессору.
*/

const Mediator = () => {

	class Professor {
		answerTheQuestion( student, question ){
			if( student.type !== 'monitor'){
				console.log(`It's not your bussines`);
			} else {
				console.log('Yes, my dear?!');
			}
			return question.split("").reverse().join("");
		}
	}


	class Student {
		constructor(name) {
			this.name = name;
			this.type = null;
			console.log(`${name} is here!`);
		}

		getAnswer(answer){
			console.log(`${answer}, thx, I understand!`);
		}

		tipTheMonitor(question){
			let monitor = new Monitor();
			monitor.askProfessor(question);
		}
	}

	let valerka = new Student('Valerka');

  	// Monitor
 	 class Monitor extends Student {
		constructor(name) {
			super()
			this.type = 'monitor';
			this.groupList = [];
			console.log(`I'm your king!`);
		}

		addToGroupList(student) {
			this.groupList.push(student.name);
			console.log(`today in the group:  ${this.groupList}`);
		}

		askProfessor(question) {
			let prof = new Professor();
			let answ = prof.answerTheQuestion(this, question)
			super.getAnswer(answ);
		}
	}

	let margarita = new Monitor('margarita');
	margarita.addToGroupList(valerka);
	valerka.tipTheMonitor('what date is it today?');
}
Mediator();

