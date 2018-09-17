const heroes = [
	{'name' : 'Prof. Xavier', 'twitter' : '@profx', 'pic' : 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0004.gif'},
	{'name' : 'Spiderman', 'twitter' : '@spidey', 'pic' : 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0008.gif'},  
	{'name' : 'Wolverine', 'pic' : 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0011.gif', 'twitter' : '@logan' }
  ];
  
  const moreHeroes = [
	 {'name' : 'Cyclops', 'twitter' : '@oneye', 'pic' : 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0005.gif'},
	 {'name' : 'Storm', 'twitter' : '@rainsitpours', 'pic' : 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0007.gif'},
	 {'name' : 'Phoenix', 'twitter' : '@jeangrey', 'pic' : 'http://www.animatedimages.org/data/media/450/animated-marvel-avatar-image-0016.gif'}
  ];
  
  // target the dom h1s which has the name of the non-hero 
  const names = Array.from( document.querySelectorAll('h1') );
  
  // target the dom h2s which has the twitter handle
  const twitterHandles = Array.from( document.querySelectorAll('h2') );
  
  // target the dom images which have the pic
  const pics = Array.from( document.querySelectorAll('img') );
  
  
  // use the map function to replace the name of each element from the names array to the name found in each object element from the heroes array
  names.map( (name, index) => name.textContent = heroes[index].name );
  
  // similarly, replace the twitter handles from the non-heroes to those found in the heroes array
  twitterHandles.map( (twitter, index) => twitter.textContent = heroes[index].twitter );
  
  // use setAttribute() to replace the images found in DOM w/ the heroes pics 
  pics.map( (pic, index) => pic.setAttribute('src', heroes[index].pic) );
  
  // GOAL is to add article tags as snippets appended to the parent main element upon button click while dynamically replacing them with moreHeroes. Consider the following steps: 
  
  // create a snippet function of the contents inside the article element to preload hero's information  
  function prepareTemplateSnippet(hero){ return `
	<div class="dtc w2 w3-ns v-mid">
	  <img src="${hero.pic}" class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
	</div>
	<div class="dtc v-mid pl3">
	  <h1 class="f6 f5-ns fw6 lh-title black mv0">${hero.name}</h1>
	  <h2 class="f6 fw4 mt0 mb0 black-60">${hero.twitter}</h2>
	</div>
	<div class="dtc v-mid">
	  <form class="w-100 tr">
		<button class="newButtons f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
	  </form>
	</div>`
	;}  
  
  // target main element which is the area designed for new heroes 
  const newHero = document.querySelector('main');
  
  
  // add a hero button to the top of the body of the DOM that iterates 1 hero at a time per click
  const addHero = document.createElement('button');
  addHero.textContent = "Add 1 Hero";
  document.body.appendChild(addHero);
  newHero.insertBefore(addHero, newHero.childNodes[0]);
  
  // create a counter that tracks how many heros are being inside the dom per click
  let heroCounter = 0; 
  
  // add event listener that adds snippet of newHeros upon click of the "Add 1 Hero" button
  addHero.addEventListener('click', () => {
	  // if hero counter is same as the length of the moreHeroes array, then we are out of heroes
	  if(heroCounter === moreHeroes.length)     
		console.log('No more heroes');
	  else {
	  // create the hero article element to append to the main  
	  let moreHeroEl = document.createElement('article'); 
	  moreHeroEl.className = "dt w-100 bb b--black-05 pb2 mt2";
	  moreHeroEl.setAttribute("href", "#0");
	  // call the snippet function with the moreHeroes array as its argument  
	  moreHeroEl.innerHTML = prepareTemplateSnippet(moreHeroes[heroCounter]); 
	  newHero.appendChild(moreHeroEl);
	  // iterate the counter by 1 after hero added
	  heroCounter++;
		
	 // tried to use the followButtonInit function i created for heroes array, but code kept breaking so i repeated code for different set of buttons. sorry, i know we're not supposed to repeat.  
	 // followButtonInit(moreHeroes);
  
	 // target the new hero buttons after adding class to snippet called newButtons  
	let newButtons = Array.from(document.querySelectorAll('.newButtons'));
	// run the map function to change text content upon click event 
	newButtons.map( (newButton, index) => {
	  newButton.addEventListener('click', changeStatus = event => {
	  event.preventDefault();
	  // change text content of button from "+ Follow" to "Unfollowing"
	  if(newButton.textContent === "+ Follow") {
		newButton.textContent = "Following";
		console.log(`Following ${moreHeroes[index].name}`);      
	  }            
	  else {
		newButton.textContent = "+ Follow";      
		console.log(`Unfollowing ${moreHeroes[index].name}`);
	  }
  
	});
  });
		
	  }    
  });
  
  
  // create a function that tracks following and unfollowing heroes  
  function followButtonInit(heroesList) {
	// target the buttons nested inside teh forms 
	let followButtons = Array.from(document.querySelectorAll('form button'));
  
	// run the map function to change text content upon click event 
	followButtons.map( (followButton, index) => {
	  followButton.addEventListener('click', changeStatus = event => {
	  event.preventDefault();
	  // change text content of button from "+ Follow" to "Unfollowing"
	  if(followButton.textContent === "+ Follow") {
		followButton.textContent = "Following";
		console.log(`Following ${heroesList[index].name}`);      
	  }            
	  else {
		followButton.textContent = "+ Follow";      
		console.log(`Unfollowing ${heroesList[index].name}`);
	  }
	  
	});
  });
  
  }
  followButtonInit(heroes);
  
  
  
  