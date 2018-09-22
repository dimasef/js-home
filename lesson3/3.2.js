let url = 'http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2';

let showPersonOnPage = obj => {
    console.log(obj);
    block = document.getElementById("block");
    header = block.querySelector(".header");
    body = block.querySelector(".body");
    header.innerHTML = `${obj.name}`;
  
    obj.friends.forEach(item => {
        body.innerHTML += `<p>друг ${item.name} </p>`;
    })

};

fetch( url ).then( response => {
    return response.json();
}).then( res => {
    //console.log(res);
    let randomPerson = res[Math.floor(Math.random() * res.length)];
    return randomPerson;
}).then( res => {
    return fetch('http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2')
        .then( response2 => {
            return response2.json();
        })
        .then( friends => {
            //console.log( res, friends );
            return {
                name: res.name,
                age: res.age,
                friends: friends[0].friends
            }
        });
}).then( response => {
    //console.log( response );
    showPersonOnPage(response);
}).catch( res => {
      console.error('Houston we have a problem: ', res);
});
  
