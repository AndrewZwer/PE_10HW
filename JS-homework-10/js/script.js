const showPassBtns = document.getElementsByClassName("fa-eye");

for (let i = 0; i < showPassBtns.length; i++) {
    showPassBtns[i].addEventListener("mousedown", showPassword);
}

function showPassword() {
    this.previousElementSibling.setAttribute("type", "text");

    this.classList.remove("fa-eye");
    this.classList.add("fa-eye-slash");

    let hidePassBtns = document.getElementsByClassName("fa-eye-slash");

    for (let i = 0; i < hidePassBtns.length; i++) {
        hidePassBtns[i].addEventListener("mousedown", hidePassword);
    }
}

function hidePassword() {
    this.previousElementSibling.setAttribute("type", "password");
    this.classList.remove("fa-eye-slash");
    this.classList.add("fa-eye");
}