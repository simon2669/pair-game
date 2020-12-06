const card = document.querySelectorAll('.card');

const back = document.querySelectorAll('.back img');
const front = document.querySelectorAll('.front img');
(function () {
  front.forEach((item) => item.src = './pictures/cow.jpg')
})();


(function () {
  card.forEach((item) => item.addEventListener('click', () => item.classList.toggle('sajt')))
})();
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const randomElement = array[Math.floor(Math.random() * array.length)];
const zeroToFour = [0, 1, 2, 3, 4];
const zeroToNien = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let zeroToFiveRandom = [];
function randomChooseFromZeroToFour(arr) {
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
const nullaKilenc = randomChooseFromZeroToFour(zeroToNien)
const nullaNégy = randomChooseFromZeroToFour(zeroToFour);
function givePicturesToCards() {
  let szám = 0;
  let index = 0;
  let hozzáadotKártya = 0;
  const számokNégyig = nullaNégy;
  let kártyaPár;

  while (hozzáadotKártya < 10) {
    kártyaPár = számokNégyig[index];
    if (szám < 2) {
      //back[hozzáadotKártya].src = './pictures/0.jpg';
      back[hozzáadotKártya].src = `./pictures/${kártyaPár}.jpg`;
      szám++;
      hozzáadotKártya++;

    } else {
      console.log('else')
      szám = 0;
      index++;

    }
  }
}

givePicturesToCards();



