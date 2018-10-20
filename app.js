// Model
var model = {
  currentCat: null,
  cats: [
    {
      clickCount: 0,
      name: 'Tabby',
      imgSrc: 'img/cat01.jpg',
      imgAttribute:""
    }
    {
      clickCount: 0,
      name: 'Rocky',
      imgSrc: 'img/cat02.jpg',
      imgAttribute:""
    }
    {
      clickCount: 0,
      name: 'Sam',
      imgSrc: 'img/cat03.jpg',
      imgAttribute:""
    }
    {
      clickCount: 0,
      name: 'Cookie',
      imgSrc: 'img/cat04.jpg',
      imgAttribute:""
    }
    {
      clickCount: 0,
      name: 'Sylvanas',
      imgSrc: 'img/cat05.jpg',
      imgAttribute:""
    }
  ]
}

// View

var catView = {
  init:function() {
    this.catElem = document.getElementById('cat');
    this.catNameElem = document.getElementById('cat-name');
    this.catImageElem = document.getElementsByClassName('cat-img');
    this.countElem = document.getElementById('cat-count');

    this.catImageElem.addEventListener('click',function(e){
      octopus.incrementCounter();
    });

    this.render();
  },

  render: function(){

    var currentCat = octopus.getCurrentCat();
    this.countElem.textContent = currentCat.clickCount;
    this.catNameElem.textContent = currentCat.clickCount;
    this.catNameElem.textContent = currentCat.name
    this.catImageElem.src = currentCat.imgSrc;
  }
};

var catListView = {
  init: function(){
    this.catListElem = document.getElementById('cat-list');
    this.render();
  },
  render: function(){
    var cats = octopus.getCats();
    this.catListElem.innerHTML = '';

    //looop over cats
    for(var i =0 ;i< cats.length; i++){
      var cat = cat[i];
      var elem = document.createElement('li');
      elem.textContent = cat.name;

      elem.addEventListener('click',function(cat){
        return function(){
          octopus.setCutrrentCat(cat);
          catView.render();
        };
      })(cat));

      this.catListElem.appendChild(elem);
    };
  }
};

// Octopus

var octopus = {
  init: function (){
    model.currentCat = model.cats[0];

    catListView.init();
    catView.inti();
  },
  getCurrentCat: function(){
    return model.currentCat;
  },

  getCats: function(){
    return model.cats;
  },

  setCurrentCat: function(cat) {
    model currentCat = cat;
  },

  incrementCounter: function(){
    model.currentCat.clickCount++;
    catView.render();
  }
}

octopus.init();
