let imageCounter = 0;
let secondsLeft = 10;

showImg();

function showImg(){
    const stopShowImgBtn = document.getElementById("stopShowImg");
    const continueShowImgBtn = document.getElementById("continueShowImg");
    const timerBlock = document.getElementById("timer");

    let timerOnTop = setInterval(function () {
        secondsLeft -= 0.1;
        timerBlock.innerText = `${secondsLeft.toFixed(1)} sec left to the next image`;
        if (secondsLeft < 0.0000005) {
            secondsLeft = 10;
        }
    }, 100);

    stopShowImgBtn.addEventListener("click", function () {
        clearInterval(startImgShow);
        clearInterval(timerOnTop);
        timerBlock.innerHTML = "";
        secondsLeft = 10;
    });

    let startImgShow = setInterval(function () {

        const imageList = document.getElementsByClassName("image-to-show");
        document.getElementsByClassName("show-image")[0].classList.remove("show-image");
        // imageList[imageCounter].classList.remove("show-image");
        imageCounter++;
        imageList[imageCounter].classList.add("show-image");
        if (imageCounter === 3) {
            imageCounter = 0;
        }

    }, 10000);

    continueShowImgBtn.addEventListener("click", function () {
        showImg();
    });
}





