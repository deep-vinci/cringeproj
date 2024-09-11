let dialogBox = document.querySelector(".dialog");
let headerText = document.querySelector(".header");

let dialogButtonYes = document.querySelector(".button-yes");
let dialogButtonNo = document.querySelector(".button-no");

const urlParams = new URLSearchParams(window.location.search);
let question = urlParams.get("question") || "Question in url";
let responseYes = urlParams.get("response-yes") || "Response in url";

headerText.textContent = question;

const getRandom = (min, max) => {
    return Math.random() * (max - min) + min;
}

const getSize = () => {
    return {
        height: window.screen.availHeight - 200,
        width: window.screen.availWidth - 100
    }        
}

dialogButtonNo.addEventListener("mouseover", () => {
    dialogButtonNo.style.position = "absolute";
    dialogButtonNo.style.left = `${getRandom(100, getSize().width)}px`;
    dialogButtonNo.style.top = `${getRandom(100, getSize().height)}px`;
})

dialogButtonYes.addEventListener("click", () => {
    alert(responseYes)
})

