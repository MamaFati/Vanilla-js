// create an array of colors
let colors = ["Green", "Red", " Blue", "rgba(133,122,200)", "#f15025"];
// Target the button
let btn = document.getElementById("btn-click1");
// Target color span
let color = document.getElementById("bg-color");
// set up the eventListner to your click event
btn.addEventListener("click", function () {
  // get random number between 0-3
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
// This function will get the colors randomly
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
  // math.floor will round to the nereast integer
}
