let imageCounter = 0;
let secondsLeft = 10;
const stopShowImgBtn = document.getElementById("stopShowImg");
const continueShowImgBtn = document.getElementById("continueShowImg");
const timerBlock = document.getElementById("timer");

showImg();

function showImg(){
    stopShowImgBtn.classList.remove("hidden-btn");
    continueShowImgBtn.classList.add("hidden-btn");

    let timerOnTop = setInterval(function () {
        secondsLeft -= 0.1;
        timerBlock.innerText = `${secondsLeft.toFixed(1)} sec left to the next image`;
        if (secondsLeft < 0.0000005) {
            secondsLeft = 10;
        }
    }, 100);

    let startImgShow = setInterval(function () {
        const imageList = document.getElementsByClassName("image-to-show");
        document.getElementsByClassName("show-image")[0].classList.remove("show-image");
        imageCounter++;
        imageList[imageCounter].classList.add("show-image");
        if (imageCounter === 3) {
            imageCounter = 0;
        }
    }, 10000);

    stopShowImgBtn.addEventListener("click", function () {
        stopShowImgBtn.classList.add("hidden-btn");
        continueShowImgBtn.classList.remove("hidden-btn");
        clearInterval(startImgShow);
        clearInterval(timerOnTop);
        timerBlock.innerHTML = "";
        secondsLeft = 10;
        continueShowImgBtn.addEventListener("click", showImg);
    });
}





