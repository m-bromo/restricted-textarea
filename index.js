const textInput = document.querySelector(".text-input")
const charCounter = document.querySelector(".char-counter") 
const charLimit = 250

function setCharCount() {
    currentCount = textInput.value.length;

    charCounter.innerHTML = `${currentCount}/${charLimit}`

    if (currentCount === charLimit) {
        charCounter.classList.add("alert")
    } else {
        charCounter.classList.remove("alert")
    }
}

setCharCount()
textInput.addEventListener("input", setCharCount)