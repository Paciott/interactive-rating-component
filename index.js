const ratingState = document.querySelector(".rating-state");
const thankYou = document.querySelector(".thank-you");
const submitButton = document.querySelector(".submit");
const ratingNums = document.querySelectorAll(".button");
const yourRate = document.getElementById("rate");
let rating = null;

submitButton.addEventListener("click", () => {
  if (rating === null || rating < 1 || rating > 5) {
    alert("Please pick a number");
  } else {
    yourRate.innerText = rating;
    thankYou.classList.remove("hidden");
    ratingState.classList.add("hidden");
  }
});

ratingNums.forEach((ratingNum) => {
  ratingNum.addEventListener("click", () => {
    rating = parseInt(ratingNum.innerText);
    // yourRate.innerText = ratingNum.innerText;
  });
});
