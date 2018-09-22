/*
  Написать медиатор для группы студентов.

  Профессор отвечает только на вопросы старосты.

  У Студента есть имя и группа которой он пренадлежит.
  Он может запросить старосту задать вопрос или получить ответ.

  Староста может добавлять студентов в группу и передавать вопрос профессору.
*/

const Mediator = () => {

  console.log( 'your code ');

  class Professor {
    answerTheQuestion( student, question ){
      if( student.type !== 'monitor'){
        console.error('It\' not your bussines');
      } else {
        console.log('Yes, my dear?!');
      }
    }
  }

  class Student {
    construnctor(name){}
    getAnswer(){}
    tipTheMonitor(){}
  }

  // Monitor == Староста
  class Monitor extends Student{
    constructor(name){}
    addToGroup(){}
    askProfessor(){}
  }

}

export default Mediator;
