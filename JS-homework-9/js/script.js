const tabsList = document.getElementsByClassName("tabs-title");
const tabsContentList = document.querySelectorAll(".tabs-content li");

for(let i = 0; i < tabsList.length; i++) {
    tabsList[i].addEventListener("click", activateTab);
}

function activateTab() {
    const prevTab = document.querySelector(".tabs .active");
    const prevTabContent = document.querySelector(".tabs-content .active");

    prevTab.classList.remove("active");
    this.classList.add("active");

    const tabsListArr = Array.prototype.slice.call(tabsList);
    const position = tabsListArr.indexOf(this);

    prevTabContent.classList.remove("active");
    tabsContentList[position].classList.add("active");
}