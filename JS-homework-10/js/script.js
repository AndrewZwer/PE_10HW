const showPassBtns = document.getElementsByClassName("icon-password");
const confirmBtn = document.getElementById("submit");

for (let i = 0; i < showPassBtns.length; i++) {
    showPassBtns[i].addEventListener("click", changeInputType);
}

confirmBtn.addEventListener("click", checkPass);

function changeInputType() {
    let inputSibling = this.previousElementSibling;
    switch (inputSibling.type) {
        case "text":
            inputSibling.type = "password";
            this.classList.remove("fa-eye-slash");
            this.classList.add("fa-eye");
            break;
        case "password":
            inputSibling.type = "text";
            this.classList.remove("fa-eye");
            this.classList.add("fa-eye-slash");
            break;
    }
}

function checkPass(event) {
    event.preventDefault();
    const closeCross = document.getElementById("closeModal");
    const modalWindow = document.getElementById("modal");
    const errorSection = document.getElementById("error-block");

    closeCross.addEventListener("click", closeModal);

    function closeModal() {
        modalWindow.classList.remove("modal-active");
    }

    const inputFields = document.querySelectorAll("input[type='password']");

    if (inputFields[0].value === inputFields[1].value) {
        clearError();
        modalWindow.classList.add("modal-active");
    }
    else {
        clearError();
        errorSection.innerText = "Нужно ввести одинаковые значения";
    }

    function clearError() {
        errorSection.innerText = "";
    }
}

