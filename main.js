const card = Array.from(document.querySelectorAll('.card'));
const back = Array.from(document.querySelectorAll('.back img'));
const front = Array.from(document.querySelectorAll('.front img'));
const másodperc = document.querySelector('.másodperc');
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let zeroToFour = [0, 1, 2, 3, 4];
let zeroToNien = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let nullaKilenc;
let nullaNégy;
let min = 0;
let second = 0;
let gameOn = false;
let secDigital;
let minDigital;



function startTimer() {
  if (gameOn) {
    if (second > 60) {
      min = min + 1;
      second = 0;
    }
    secDigital = second < 10 ? `0${second}` : second;
    minDigital = min < 10 ? `0${min}` : min;
    másodperc.textContent = `${minDigital}:${secDigital}`;
    second++;
    setTimeout(startTimer, 1000);
  }
};


(function () {
  front.forEach((item) => item.src = './pictures/cow.jpg')
})();

function arrToRandom(arr) {

  const hossz = arr.length;
  let szamok = [];
  for (let i = 0; i < hossz; i++) {
    let randomNumber = arr[Math.floor(Math.random() * arr.length)];
    szamok.unshift(randomNumber)
    arr.splice(arr.indexOf(randomNumber), 1)
  }
  //console.log(szamok)
  return szamok;
}

function givePicturesToCards() {
  let szám = 0;
  let index = 0;
  let hozzáadotKártya = 0;
  let számokNégyig = nullaNégy;
  let kártyaPár;
  let randomNextNumber;
  while (hozzáadotKártya < 10) {
    randomNextNumber = nullaKilenc[hozzáadotKártya];

    kártyaPár = számokNégyig[index];
    if (szám < 2) {
      //back[hozzáadotKártya].src = './pictures/0.jpg';
      back[randomNextNumber].dataset.number = kártyaPár;
      //console.log(back[hozzáadotKártya].dataset.number)
      back[randomNextNumber].src = `./pictures/${kártyaPár}.jpg`;
      szám++;
      hozzáadotKártya++;

    } else {
      //console.log('else')
      szám = 0;
      index++;

    }
  }
};

function megfordít() {
  let megfordítottKártya = 0;
  let elozoSzam;
  let elozoKártya;
  let megtaláltPár = 0;
  card.forEach((item, index) => item.addEventListener('click', function () {
    megfordítottKártya++;
    let szám = back[index].dataset.number;
    item.classList.add('megfordít');
    item.classList.add('unclickable');
    //console.log(item.dataset['number'])
    if (megfordítottKártya == 2) {
      if (szám != elozoSzam) {
        setTimeout(function () {
          item.classList.remove('unclickable');
          elozoKártya.classList.remove('unclickable');
          item.classList.remove('megfordít');
          elozoKártya.classList.remove('megfordít');
        }, 1000)
      }
      else {
        megtaláltPár++;
        item.classList.add('unclickable')
        elozoKártya.classList.add('unclickable')
      }
      console.log('kkk')
      megfordítottKártya = 0;
    }
    else {
      elozoKártya = item;
      elozoSzam = back[index].dataset.number;
    }
    if (megtaláltPár == 1) {
      back.forEach((sajt) => sajt.dataset.number = "")
      gameOn = false;
      megtaláltPár = 0;
      megfordítottKártya = 0;
      setTimeout(endOfTheGame, 1000)
    }
  }))
};

function endOfTheGame() {
  gameOn = false;
  card.forEach((item) => item.classList.remove('megfordít'))
  card.forEach((item) => item.classList.remove('unclickable'))
  console.log(`${secDigital}`);
  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  zeroToFour = [0, 1, 2, 3, 4];
  zeroToNien = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  second = 0;
  startTheGame();
}


function startTheGame() {
  let placeHolder = arrToRandom(zeroToNien);
  let placeHolder2 = arrToRandom(zeroToFour);
  nullaNégy = placeHolder2;
  nullaKilenc = placeHolder;
  console.log(nullaKilenc)
  card.forEach((item) => item.addEventListener('click', function () {
    if (!gameOn) {
      gameOn = true;
      givePicturesToCards();
      megfordít();
      startTimer();
    }
  }))
};
startTheGame();
