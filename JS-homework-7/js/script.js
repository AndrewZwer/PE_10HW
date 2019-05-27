let arr = ['hello', 'world', ['sub element1', 'sub element2', 'sub element3'], 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'];
let pageTimer = document.getElementById("timer");
let list = document.getElementById("myList");
let counter = 9;

let timerIsOn = setInterval(function() {
    pageTimer.innerText = counter;
    counter--;
    }, 1000);

setTimeout(function () {
    clearInterval(timerIsOn);
    list.innerHTML = "";
}, 10000);

function showList( array ) {
    array.map(function (value) {
        if(value instanceof Array) {
            let subList = document.createElement("ul");
            value.map(function (subValue) {
                list.lastChild.appendChild(subList);
                let listItem = document.createElement("li");
                listItem.innerHTML = `${subValue}`;
                subList.appendChild(listItem);
            });
            return false;
        }

        let listItem = document.createElement("li");
        listItem.innerHTML = `${value}`;
        list.appendChild(listItem);
    })
}

showList(arr);