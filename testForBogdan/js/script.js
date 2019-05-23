let myBtn = document.getElementById("modalOpen"),
    modalWindow = document.getElementById("darkScreen"),
    crossClose = document.getElementById("close");

myBtn.onclick = function () {
    modalWindow.classList.remove("hidden");
};

crossClose.onclick = function () {
    modalWindow.classList.add("hidden");
};