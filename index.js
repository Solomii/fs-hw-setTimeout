"use strict";

const btn = document.getElementById("btn");

const showSubscribeMsg = document.getElementById("popupWindow");

function showMessage() {
    const titleShowSubcribeMsg = document.createElement(
        "h3",
        "Please subscribe!"
    );
    titleShowSubcribeMsg.innerText = "Please subscribe!";
    showSubscribeMsg.classList.add("subscribe");
    showSubscribeMsg.style.display = "block";

    const innerButton = document.createElement("button");
    innerButton.innerText = "Subsciribe";
    innerButton.addEventListener("click", () => {
        showSubscribeMsg.style.display = "none";
        console.log("subscirbe inner button");
    });

    showSubscribeMsg.append(titleShowSubcribeMsg, innerButton);
}

let timeoutID = setTimeout(showMessage, 3000);

btn.addEventListener("click", () => {
    clearTimeout(timeoutID);
    console.log("Time stop");
});
