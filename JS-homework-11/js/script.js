document.addEventListener("keydown", highLightButton);

function highLightButton(event) {
    const btnsColection = document.getElementsByClassName("btn");

    for (let i = 0; i < btnsColection.length; i++) {
        if (btnsColection[i].innerText === event.key || btnsColection[i].innerText === event.key.toUpperCase()) {
            for (let i = 0; i < btnsColection.length; i++){
                btnsColection[i].classList.remove("blue-btn");
            }
            btnsColection[i].classList.add("blue-btn");
        }
    }
}