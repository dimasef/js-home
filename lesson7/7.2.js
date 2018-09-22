/*

  Задание:
    1. Используя функциональный декоратор, написать декоратор который будет показывать
       аргументы и результат выполнения функции.

    2. Написать декоратор для класса, который будет преобразовывать аргументы в число,
       если они переданы строкой, и выводить ошибку если переданая переменная не
       может быть преобразована в число
*/

const Work1 = () => {

    class CoolMath {
      addNumbers(a,b){ return a+b; }
      multiplyNumbers(a,b){ return a*b}
      minusNumbers(a,b){ return a-b }
    }
    let Calcul = new CoolMath();
    let x = Calcul.addNumbers(2, 2)
    let y = Calcul.multiplyNumbers(10, 2)
    let z = Calcul.minusNumbers(10, 2)
    console.log(x, y, z);
  };
  
  