let messageWrapper = document.getElementById("message-block");
let priceField = document.getElementById("price");
let resultSpan = document.createElement("span");
resultSpan.setAttribute("id", "priseResult");

function clearMessageBlock () {
    messageWrapper.innerHTML = "";
    if (priceField.classList.contains("correct-value")) {
        priceField.classList.remove("correct-value");
    }
}

function getPrice () {
    let errorMessage = document.createElement("p");
    errorMessage.setAttribute("id", "error");
    errorMessage.innerHTML = "Please enter correct price";

    if (this.value === "") {
        clearMessageBlock();
    }
    else if (this.value <= 0) {
        clearMessageBlock();
        messageWrapper.appendChild(errorMessage);
        errorMessage.classList.add("incorrect-value");
    }
    else if (this.value > 0) {
        clearMessageBlock();
        const closeCross = document.createElement("a");
        closeCross.setAttribute("id", "close-cross");
        closeCross.className = "crossBtn";
        closeCross.innerHTML = "x";
        resultSpan.innerHTML = `Current prise: ${this.value}`;
        resultSpan.appendChild(closeCross);
        messageWrapper.appendChild(resultSpan);
        priceField.classList.add("correct-value");
        closeCross.addEventListener("click", removeResult);
    }
}

function removeResult () {
    clearMessageBlock();
    priceField.value = "";
    priceField.classList.remove("correct-value");
}

priceField.addEventListener("blur", getPrice);


