//Question 1
const bgButton = document.querySelector("#bg");
const body = document.querySelector("body");

bgButton.onclick = function () {
    body.style.background = "green"
}

//Question 2
const toggleBtn = document.querySelector(".toggler");
const togglee = document.querySelector(".togglee");

toggleBtn.onclick = function () {
    togglee.classList.toggle("extra");
}

// Question 3
const dropdown = document.querySelector("select");
const container = document.querySelector(".paragraphs-container");

dropdown.onchange = function () {
    container.innerHTML = "";
    const numberOfPTags = this.value;

    for (let i = 1; i <= numberOfPTags; i++) {
        container.innerHTML += `<p class="content"><p>`
    }

}

//Question 4
const input = document.querySelector(".input");
const charCounter = document.querySelector(".char-count b");
input.onkeyup = function () {
   charCounter.innerHTML = input.value.length;
}

//Question 5

window.onscroll = function () {
    if (this.scrollY >= 35) {
        body.classList.add("highlight");
    } else {
        body.classList.remove("highlight");
    }
}