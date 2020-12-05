const card = document.querySelectorAll('.card');
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
  console.log(szamok)

}
randomChooseFromZeroToFour(zeroToFour)
randomChooseFromZeroToFour(zeroToNien)


