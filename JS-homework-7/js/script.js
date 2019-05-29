let arr = ['hello', 'world', ['sub element1', 'sub element2', 'sub element3'], 'Kiev', 'Kharkiv', ['sub element1', 'sub element2', 'sub element3'],  'Odessa', 'Lviv'];
let pageTimer = document.getElementById("timer");
let listWrapper = document.getElementById("block-for-list");
let counter = 9;

let timerIsOn = setInterval(function() {
    pageTimer.innerText = counter;
    counter--;
    }, 1000);

setTimeout(function () {
    clearInterval(timerIsOn);
    listWrapper.innerHTML = "";
}, 10000);

function showList(array) {
    let newList = document.createElement("ul");
    array.map(function (value) {
        let listItem = document.createElement("li");
        newList.appendChild(listItem);
        if (value instanceof Array) {
            listItem.appendChild(showList(array = value));
        } else {
            listItem.innerHTML = `${value}`;
        }
    });

    return newList
}

listWrapper.appendChild(showList(arr));



