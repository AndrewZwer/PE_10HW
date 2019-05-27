let testArr = [ null, "man", 30, "22", true, 70, false, null, undefined, {} ];
let filteredArr = function filterBy (arr, dataType) {
    return arr.filter(function (arrElement) {
        if (arrElement === null && typeof arrElement === dataType ) {
            return true;
        }
        else if (arrElement === null && dataType === "null") {
            return false;
        }
        return typeof(arrElement) !== dataType;
    });
};

console.log(filteredArr(testArr, "undefined"));