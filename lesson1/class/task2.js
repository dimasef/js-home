'use strict'

let data = [
    {
      link: "#1",
      name: "Established fact123123",
      description: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      image: "http://telegram.org.ru/uploads/posts/2017-10/1507400926_file_162303.jpg"
    },
    {
      link: "#1",
      name: "Established fact",
      description: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      image: "http://telegram.org.ru/uploads/posts/2017-10/1507400926_file_162303.jpg"
    },
    {
      link: "#2",
      name: "Many packages",
      description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
      image: "http://telegram.org.ru/uploads/posts/2017-10/1507400859_file_162309.jpg"
    },
    {
      link: "#3",
      name: "Suffered alteration",
      description: "Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.",
      image: "http://telegram.org.ru/uploads/posts/2017-10/1507400896_file_162315.jpg"
    },{
      link: "#4",
      name: "Discovered source",
      description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
      image: "http://telegram.org.ru/uploads/posts/2017-10/1507400878_file_162324.jpg"
    },{
      link: "#5",
      name: "Handful model",
      description: "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      image: "http://telegram.org.ru/uploads/posts/2017-10/1507400876_file_162328.jpg"
    },
  ];

  let main = document.getElementById('main');

  class catPost {
    constructor( item, key ){
      let { link, name, description, image } = item;
      this.link = link;
      this.name = name;
      this.description = description;
      this.image = image;
      this.like = 0;
      this.id = key;

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
              <h3>${this.name}</h3>
              <img width="150" height="150" src="${this.image}"/>
              <b>${this.like}</b>
              <button data-id="${this.id}">Like!</button>
            </div>
          `;

      let likeBtn = postBlock.querySelector('button');
          likeBtn.addEventListener('click', this.incLikes );
          main.appendChild(postBlock);
    }
  }

  let transformedArray = data.map( (item, key) => {
    let post = new catPost(item, key);
        post.render();
  });
