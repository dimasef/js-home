'use strict'

let data = [
    {
      id: "1",
      title: "демонтаж уже начался",
      description: "Киевские дворы хотят очистить от гаражей – демонтаж уже начался",
      image: "http://moygrad.kiev.ua/media/cache/17/42/1742917ab50279ebe01fc96fa1aa8b79.jpg"
    },
    {
      id: "2",
      title: "Established fact",
      description: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      image: "https://images.ua.prom.st/16526339_w0_h0_u2.jpg"
    },
    {
      id: "3",
      title: "Many packages",
      description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
      image: "http://moygrad.kiev.ua/media/cache/17/42/1742917ab50279ebe01fc96fa1aa8b79.jpg"
    },
    {
      id: "4",
      title: "Suffered alteration",
      description: "Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.",
      image: "https://images.ua.prom.st/16526339_w0_h0_u2.jpg"
    },{
      id: "5",
      title: "Discovered source",
      description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      image: "http://telegram.org.ru/uploads/posts/2017-10/1507400878_file_162324.jpg"
    },{
      id: "6",
      title: "Handful model",
      description: "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      image: "http://telegram.org.ru/uploads/posts/2017-10/1507400876_file_162328.jpg"
    },
  ];

  let main = document.getElementById('main');

  class Post {
    constructor( item, key ){
      let {id, title, description, image } = item;
      this.title = title;
      this.image = image;
      this.description = description;
      this.like = 0;
      this.id = id;

      this.render = this.render.bind(this);
      this.incLikes = this.incLikes.bind(this);
    }

    update(id, likeCounter){
      let updateDOM = main.querySelectorAll('.items');
          updateDOM.forEach( item => {
            if( item.dataset.id === id){
              let x = item.querySelector('b');
                  x.innerHTML = likeCounter;
            }
        });
    }
    incLikes(event){
      this.like = this.like + 1;
      this.update( event.target.dataset.id, this.like);
    }
    render(){
      let postBlock = document.createElement('div');
          postBlock.innerHTML = `
            <div class="items" data-id="${this.id}">
              <h3>${this.title}</h3>
              <img width="150" height="150" src="${this.image}"/>
              <p style="width: 200px;">${this.description}</p>
              <b>${this.like}</b>
              <button data-id="${this.id}">Like!</button>
            </div>
          `;

      let likeBtn = postBlock.querySelector('button');
          likeBtn.addEventListener('click', this.incLikes );
          main.appendChild(postBlock);
    }
}

class Advertisment extends Post {
    constructor(item, key){
        super(item, key);
        this.buyItem = this.buyItem.bind(this);
    }
    render() {
        let postBlock = document.createElement('div');
          postBlock.innerHTML = `
            <div class="items red" data-id="${this.id}">
              <h3>${this.title}</h3>
              <img width="150" height="150" src="${this.image}"/>
              <p style="width: 200px;">${this.description}</p>
              <b>${this.like}</b>
              <button class="like" data-id="${this.id}">Like!</button>
              <button class="buy" data-id="${this.id}">Buy</button>
            </div>
          `;

      let likeBtn = postBlock.querySelector('.like');
      let buyBtn = postBlock.querySelector('.buy');
          likeBtn.addEventListener('click', this.incLikes );
          buyBtn.addEventListener('click', this.buyItem);
          main.appendChild(postBlock);
    }
    buyItem(){
        alert(`Вы купили ${this.title}`);
    }
}


let transformedArray = data.map( (item, key) => {
    if(((key+1) % 3) == 0) {
        let advertisment = new Advertisment(item, key);
        advertisment.render();
    }
    else {
        let post = new Post(item, key);
        post.render();
    }
});
