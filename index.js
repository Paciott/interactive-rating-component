const ratingState = document.querySelector(".rating-state");
const thankYou = document.querySelector(".thank-you");
const submitButton = document.querySelector(".submit");
const ratingNums = document.querySelectorAll(".button");
const yourRate = document.getElementById("rate");

submitButton.addEventListener("click", () => {
  thankYou.classList.remove("hidden");
  ratingState.classList.add("hidden");
});

ratingNums.forEach((ratingNum) => {
  ratingNum.addEventListener("click", () => {
    yourRate.innerHTML = ratingNum.innerText;
  });
});
