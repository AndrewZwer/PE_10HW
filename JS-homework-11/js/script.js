document.addEventListener("keydown", highLightButton);

function highLightButton(event) {
    const btnsColection = document.getElementsByClassName("btn");
    for (let i = 0; i < btnsColection.length; i++) {
        if (btnsColection[i].innerText.toLowerCase() === event.key.toLowerCase()) {
            for (let i = 0; i < btnsColection.length; i++){
                btnsColection[i].classList.remove("blue-btn");
            }
            btnsColection[i].classList.add("blue-btn");
        }
    }
}