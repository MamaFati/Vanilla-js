// let an array of colors
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// Target my values
let color = document.getElementById("bg-color");
let btn = document.getElementById("btn-click1");
btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNuber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
// function to get random numbers
function getRandomNuber() {
  return Math.floor(Math.random() * hex.length);
}
 