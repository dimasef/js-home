document.addEventListener('DOMContentLoaded', () => {
    let badComedian = Object.create(HTMLElement.prototype);
    badComedian.createdCallback = function(){
      this.link = this.getAttribute('link');
    }
    badComedian.attachedCallback = function(){
      this.innerHTML = `
        <iframe width="100%" height="500" src="https://www.youtube.com/embed/${this.link}"
        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      `;
    }
    badComedian.detachedCallback = () => {
      	console.log('bad-comedian removed');
    }
    badComedian.attributeChangedCallback = function(name, prevValue, newValue){
      	if( name === 'link' && prevValue !== newValue){
        	this.querySelector('iframe').src = `https://www.youtube.com/embed/${newValue}`;
      	}
    }
    
    document.registerElement("bad-comedian", {
    	prototype: badComedian
	});
	
  let videos = ['EGWYfT4si5Q', 'JZT8R1pkNW4', 'z82L0EDmbms', 
                'pconHWXO3Ss', 'NhZRiOo-MqE', 'ym0o49jxcSI', 
                'Bf_7gWpMxSg', 'EghVoOjeCrs', 'VQvx9JKwO4s'];
    let bad = document.getElementById('bad-comedian');
    change.addEventListener('click', function(){
        let rundId = Math.floor(Math.random() * videos.length + 1);
        bad.setAttribute('link', videos[rundId-1]);
    });
});
