"use strict";
const btn = document.getElementById("btn");

const showSubscribeMsg = document.getElementById("popupWindow");

function showMessage() {
  showSubscribeMsg.innerHTML = "Subscribe!";
  showSubscribeMsg.classList.add("subscribe");
}

let timeoutID = setTimeout(showMessage, 3000);

btn.addEventListener("click", () => {
    clearTimeout(timeoutID);
    console.log("Time stop");
});
