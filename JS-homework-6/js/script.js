let testArr = [ null, "man", 30, "22", true, 70, false, null, undefined, {} ];
let newArr = [];

function filterBy (arr, dataType) {
    newArr = arr.filter(function (arrElement) {
        if (arrElement === null && typeof arrElement === dataType ) {
            return true;
        }
        else if (arrElement === null && dataType === "null") {
            return false;
        }
        return typeof(arrElement) !== dataType;
    });
    return newArr;
}

console.log(filterBy(testArr, "undefined"));