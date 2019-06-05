const changeThemeBtn = document.getElementById("theme-btn");

changeThemeBtn.addEventListener("click", changeTheme);

if (localStorage["theme"] === "dark-theme") {
    changeThemeBtn.innerText = "Light theme";
    document.body.classList.add(localStorage["theme"]);
}
else {
    changeThemeBtn.innerText = "Dark theme";
}

function changeTheme () {
    if (localStorage["theme"] === "dark-theme") {
        changeThemeBtn.innerText = "Dark theme";
        localStorage["theme"] = "light-theme";
        document.body.className = "";
    }
    else {
        changeThemeBtn.innerText = "Light theme";
        localStorage["theme"] = "dark-theme";
        document.body.classList.add(localStorage["theme"]);
    }
}