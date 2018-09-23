/*
  Задание: Модуль создания плейлиста, используя паттерн Обсервер.

  У вас есть данные о исполнителях и песнях. Задание делится на три модуля:
    1. Список исполнителей и песен (Находится слева) - отуда можно включить
    песню в исполнение или добавить в плейлист.
    Если песня уже есть в плейлисте, дважды добавить её нельзя.

    2. Плейлист (Находится справа) - список выбраных песен, песню можно удалить,
    или запустить в исполнение. Внизу списка должен выводиться блок, в котором
    пишет суммарное время проигрывания всех песен в плейлисте.

    3. Отображает песню которая проигрывается.

    4. + Бонус: Сделать прогресс бар того как проигрывается песня
    с возможностью его остановки.
*/
const MusicList = [
  {
    title: 'Rammstain',
    songs: [
      {
        id: 1,
        name: 'Du Hast',
        time: [3, 12]
      },
      {
        id: 2,
        name: 'Ich Will',
        time: [5, 1]
      },
      {
        id: 3,
        name: 'Mutter',
        time: [4, 15]
      },
      {
        id: 4,
        name: 'Ich tu dir weh',
        time: [5, 13]
      },
      {
        id: 5,
        name: 'Rammstain',
        time: [3, 64]
      }
    ]
  },
  {
    title: 'System of a Down',
    songs: [
      {
        id: 6,
        name: 'Toxicity',
        time: [4, 22]
      },
      {
        id: 7,
        name: 'Sugar',
        time: [2, 44]
      },
      {
        id: 8,
        name: 'Lonely Day',
        time: [3, 19]
      },
      {
        id: 9,
        name: 'Lost in Hollywood',
        time: [5, 9]
      },
      {
        id: 10,
        name: 'Chop Suey!',
        time: [2, 57]
      }
    ]
  },
  {
    title: 'Green Day',
    songs: [
      {
        id: 11,
        name: '21 Guns',
        time: [4, 16]
      },
      {
        id: 12,
        name: 'Boulevard of broken dreams!',
        time: [6, 37]
      },
      {
        id: 13,
        name: 'Basket Case!',
        time: [3, 21]
      },
      {
        id: 14,
        name: 'Know Your Enemy',
        time: [4, 11]
      }
    ]
  },
  {
    title: 'Linkin Park',
    songs: [
      {
        id: 15,
        name: 'Numb',
        time: [3, 11]
      },
      {
        id: 16,
        name: 'New Divide',
        time: [4, 41]
      },
      {
        id: 17,
        name: 'Breaking the Habit',
        time: [4, 1]
      },
      {
        id: 18,
        name: 'Faint',
        time: [3, 29]
      }
    ]
  }
]

function Observable(){
  // Создаем список подписаных обьектов
  var observers = [];
  // Оповещение всех подписчиков о сообщении
  this.sendMessage = function( msg ){
      observers.map( ( obs ) => {
        obs.notify(msg);
      });
  };
  // Добавим наблюдателя
  this.addObserver = function( observer ){
    observers.push( observer );
  };
}
// Сам наблюдатель:
function Observer( behavior ){
  this.notify = function( callback ){
    behavior( callback );
  };
}

  // Создадим наблюдателя:
let observable = new Observable();

// Трех обсерверов:
let playListObs = new Observer( function(id){
    let filtredToPlayList = MusicList.filter( item => Number(item.id) === Number(id) );
        Cart.push( filtredToPlayList[0] );
        renderBasket();
  });

  let serverObs = new Observer( (id) => {
      let filtredToBasket = Products.filter( item => Number(item.id) === Number(id) );
      let msg = `Товар ${filtredToBasket[0].name} добавлен в корзину`;
      console.log( msg );
  });

  let iconObs = new Observer( (id) => {
      let filtredToBasket = Products.filter( item => Number(item.id) === Number(id) );

      let products__cart = document.getElementById('products__cart');
          products__cart.innerText = Cart.length;
  });

  observable.addObserver( playListObs );
  observable.addObserver( serverObs );
  observable.addObserver( iconObs );


const MusicBox = () => {
  	const MusicBox = document.getElementById('MusicBox');
  	MusicList.map( Artist => {
		MusicBox.innerHTML += `<div><h4>${Artist.title}</h4><ul>`;
		Artist.songs.map( song => {
			MusicBox.innerHTML += `<li>${song.name}</li>`;
		});
		MusicBox.innerHTML += '</ul></div>';
	});
}
MusicBox();

