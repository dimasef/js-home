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
		time: [3, 12],
		parentId: 1
      },
      {
        id: 2,
        name: 'Ich Will',
		time: [5, 1],
		parentId: 1
      },
      {
        id: 3,
        name: 'Mutter',
		time: [4, 15],
		parentId: 1
      },
      {
        id: 4,
        name: 'Ich tu dir weh',
		time: [5, 13],
		parentId: 1
      },
      {
        id: 5,
        name: 'Rammstain',
		time: [3, 64],
		parentId: 1
      }
    ]
  },
  {
    title: 'System of a Down',
    songs: [
      {
        id: 6,
        name: 'Toxicity',
		time: [4, 22],
		parentId: 2
      },
      {
        id: 7,
        name: 'Sugar',
		time: [2, 44],
		parentId: 2
      },
      {
        id: 8,
        name: 'Lonely Day',
		time: [3, 19],
		parentId: 2
      },
      {
        id: 9,
        name: 'Lost in Hollywood',
		time: [5, 9],
		parentId: 2
      },
      {
        id: 10,
        name: 'Chop Suey!',
		time: [2, 57],
		parentId: 2
      }
    ]
  },
  {
    title: 'Green Day',
    songs: [
      {
        id: 11,
        name: '21 Guns',
		time: [4, 16],
		parentId: 3
      },
      {
        id: 12,
        name: 'Boulevard of broken dreams!',
		time: [6, 37],
		parentId: 3
      },
      {
        id: 13,
        name: 'Basket Case!',
		time: [3, 21],
		parentId: 3
      },
      {
        id: 14,
        name: 'Know Your Enemy',
		time: [4, 11],
		parentId: 3
      }
    ]
  },
  {
    title: 'Linkin Park',
    songs: [
      {
        id: 15,
        name: 'Numb',
		time: [3, 11],
		parentId: 4
      },
      {
        id: 16,
        name: 'New Divide',
		time: [4, 41],
		parentId: 4
      },
      {
        id: 17,
        name: 'Breaking the Habit',
		time: [4, 1],
		parentId: 4
      },
      {
        id: 18,
        name: 'Faint',
		time: [3, 29],
		parentId: 4
      }
    ]
  }
]

function Observable(){

  var observers = [];

  this.sendMessage = function( ...msg ){
      observers.map( ( obs ) => {
        obs.notify(msg);
      });
  };

  this.addObserver = function( observer ){
    observers.push( observer );
  };
}

function Observer( behavior ){
  this.notify = function( callback ){
    behavior( callback );
  };
}

let observable = new Observable();

let playList = [];

let playListObs = new Observer(ids => {

	if(!playList.includes(+ids[0])){
		let songsArr = MusicList[ids[1] - 1];
		let filtredToPlayList = songsArr.songs.filter( item => Number(item.id) === Number(ids[0]) );
		MusicPlayList.innerHTML += `<p>${filtredToPlayList[0].name}</p>`;
		playList.push( filtredToPlayList[0].id );
	}
	else console.log("Уже в плей листе");
});

let playTrek = new Observer(ids => {
	let songsArr = MusicList[ids[1] - 1];
	let filtredToTrek = songsArr.songs.filter( item => Number(item.id) === Number(ids[0]) );
	let msg = `Песня ${filtredToTrek[0].name} играет тыц-тыц-тыц... =/`;
    console.log(msg);
});

observable.addObserver( playListObs );
observable.addObserver( playTrek );


const MusicBox = () => {
  	const MusicBox = document.getElementById('MusicBox');
  	MusicList.map( Artist => {
		MusicBox.innerHTML += `<div><h4>${Artist.title}</h4><ul>`;
		Artist.songs.map( song => {
			MusicBox.innerHTML += `<li data-parent-id="${song.parentId}" data-song-id="${song.id}">${song.name}</li>`;
		});
		MusicBox.innerHTML += '</ul></div>';
  });
  let songName = MusicBox.querySelectorAll('li');
  songName.forEach(item => {
	item.onclick = function() {
		observable.sendMessage(this.dataset.songId, this.dataset.parentId);
	}
  });
}
MusicBox();

