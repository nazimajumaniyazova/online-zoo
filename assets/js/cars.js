const cardsArray =[
    {
        img: './assets/images/pet-1.jpg',
        title: 'giant Pandas',
        desc: 'Native to Southwest China',
        icon: 'icon-shark'
    },
    {
        img: './assets/images/pet-2.jpg',
        title: 'Eagles',
        desc: 'Native to South America',
        icon: 'icon-shark'
    },
    {
        img: './assets/images/pet-3.jpg',
        title: 'Gorillas',
        desc: 'Native to Congo',
        icon: 'icon-banana'
    },
    {
        img: './assets/images/pet-4.jpg',
        title: 'Two-toed Sloth',
        desc: 'Mesoamerica, South America',
        icon: 'icon-banana'
    },
    {
        img: './assets/images/pet-5.jpg',
        title: 'cheetahs',
        desc: 'Native to Africa',
        icon: 'icon-shark'
    },
    {
        img: "./assets/images/pet-6.jpg",
        title: 'Penguins',
        desc: 'Native to Antarctica',
        icon: 'icon-banana'
    },
    {
        img: "./assets/images/pet-13.jpg",
        title: 'Raccoon',
        desc: 'In my heart',
        icon: 'icon-shark'
    },
    {
        img: "./assets/images/pet-7.jpg",
        title: 'Alligators',
        desc: 'Native to Southeastern United States',
        icon: 'icon-banana'
    },
    {
        img: "./assets/images/pet-8.jpg",
        title: 'Foxes',
        desc: 'Your some neighbours',
        icon: 'icon-banana'
    },
    {
        img: "./assets/images/pet-9.jpg",
        title: 'Melman',
        desc: 'Madagascar',
        icon: 'icon-banana'
    },
    {
        img: "./assets/images/pet-10.jpg",
        title: 'Gloria',
        desc: 'Madagascar',
        icon: 'icon-banana'
    },
    {
        img: "./assets/images/pet-11.jpg",
        title: 'Alex',
        desc: 'Madagascar',
        icon: 'icon-banana'
    },
    {
        img: "./assets/images/pet-12.jpg",
        title: 'Marty',
        desc: 'Madagascar',
        icon:'icon-shark'
    },
]


var slider = document.getElementById('slider'),
    sliderItems = document.getElementById('slides'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next');
let cardsNum = 6;
let resize1 = false;
const pageWidth1 = document.documentElement.scrollWidth
if(pageWidth1 <=640){
    resize1 = true;
    cardsNum = 4;
}
function slide(wrapper, items, prev, next) {
  var posX1 = 0,
      posX2 = 0,
      posInitial,
      posFinal,
      threshold = 100,
      slides = items.getElementsByClassName('slide'),
      slidesLength = slides.length,
      slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
      firstSlide = slides[0],
      lastSlide = slides[slidesLength - 1],
      cloneFirst = firstSlide.cloneNode(true),
      cloneLast = lastSlide.cloneNode(true),
      index = 0,
      allowShift = true;
   //console.log(slidesLength, slideSize) // 5 600
  // Clone first and last slide
  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);
  wrapper.classList.add('loaded');
  
  generateSlideCards()
 // Mouse events
  items.onmousedown = dragStart;
  
  //Touch events
  items.addEventListener('touchstart', dragStart);
  items.addEventListener('touchend', dragEnd);
  items.addEventListener('touchmove', dragAction);
  
  // Click events
  prev.addEventListener('click', function () { 
    shiftSlide(-1)
    generateSlideCards()
   });
  next.addEventListener('click', function () { 
    shiftSlide(1)
    generateSlideCards()
   });
  
  // Transition events
  items.addEventListener('transitionend', checkIndex);
  
  function dragStart (e) {
    e = e || window.event;
    e.preventDefault();
    posInitial = items.offsetLeft;
    
    if (e.type == 'touchstart') {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }
  function generateSlideCards(){
    let randomNumArray = arrayWithRandomNums()
    let petCards =''
    for(let i=0; i<randomNumArray.length;i++){
        let petCard = `<div class="pet-card">
        <img class="pet-card__img" src="${cardsArray[randomNumArray[i]].img}" alt="giant pandas">
        <div class="pet-card__content">
            <div class="pet-card__text">
                <p class="pet-card__title">${cardsArray[randomNumArray[i]].title}</p>
                <p class="pet-card__desc">${cardsArray[randomNumArray[i]].desc}</p>
            </div>
            <span class="icon ${cardsArray[randomNumArray[i]].icon}"></span>
        </div>
        </div>`
        petCards +=petCard
    }
    if(index === -1){
        slides[4].innerHTML =petCards
    }else if(index === 0){
        slides[0].innerHTML =petCards
    }else{
        slides[index].innerHTML =petCards
    }
    
  }
  function arrayWithRandomNums() {
        let randomNum = getRandomNum(12)
        let array = []
        array.push(randomNum)
        for(let i=1;i<cardsNum;){
            randomNum = getRandomNum(12)
            if(array.includes(randomNum)){
                randomNum = getRandomNum(12)
            }else{
                array.push(randomNum)
                i++
            }
            
        }
      return array
  }
  function dragAction (e) {
    e = e || window.event;
    
    if (e.type == 'touchmove') {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    items.style.left = (items.offsetLeft - posX2) + "px";
  }
  
  function dragEnd (e) {
    posFinal = items.offsetLeft;
    if (posFinal - posInitial < -threshold) {
      shiftSlide(1, 'drag');
    } else if (posFinal - posInitial > threshold) {
      shiftSlide(-1, 'drag');
    } else {
      items.style.left = (posInitial) + "px";
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }
  
  function shiftSlide(dir, action) {
  
    items.classList.add('shifting');
    if (allowShift) {
      if (!action) { posInitial = items.offsetLeft;}
      
      if (dir == 1) {
       // console.log("posInitial", posInitial)
        items.style.left = (posInitial - slideSize) + "px";
       // console.log('left', items.style.left)
        index++;      
      } else if (dir == -1) {
            items.style.left = (posInitial + slideSize) + "px";       
            index--;      
      }
    };
    
    allowShift = false;
  }
    
  function checkIndex (){
    items.classList.remove('shifting');

    if (index == -1) {
      items.style.left = -(slidesLength * slideSize) + "px";
      index = slidesLength - 1;
    }

    if (index == slidesLength) {
        console.log(index)
      items.style.left = -(1 * slideSize) + "px";
      index = 0;
      console.log(index)
    }
    
    allowShift = true;
  }
}

slide(slider, sliderItems, prev, next);

function getRandomNum(maxNum){
    return Math.floor(Math.random() * maxNum);
}
