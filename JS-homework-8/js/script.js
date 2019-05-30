let messageWrapper = document.getElementById("message-block");
let priceField = document.getElementById("price");
let resultSpan = document.createElement("span");
resultSpan.setAttribute("id", "priseResult");

function getPrice () {
    let errorMessage = document.createElement("p");
    errorMessage.setAttribute("id", "error");
    errorMessage.innerHTML = "Please enter correct price";

    if (this.value <= 0 ) {
        messageWrapper.innerHTML = "";
        this.style.borderColor = "red";
        messageWrapper.appendChild(errorMessage);
        return;
    }

    messageWrapper.innerHTML = "";
    priceField.style.borderColor = "";

    const closeCross = document.createElement("a");
    closeCross.setAttribute("id", "close-cross");
    closeCross.className = "crossBtn";
    closeCross.innerHTML = "x";
    resultSpan.innerHTML = `Current prise: ${this.value}`;
    resultSpan.appendChild(closeCross);
    messageWrapper.appendChild(resultSpan);
    priceField.style.backgroundColor = "green";

    closeCross.addEventListener("click", removeResult);
}

function removeResult () {
    console.log(messageWrapper);
    messageWrapper.innerHTML = "";
    priceField.value = "";
    priceField.style.backgroundColor = "";
}

priceField.addEventListener("blur", getPrice);


