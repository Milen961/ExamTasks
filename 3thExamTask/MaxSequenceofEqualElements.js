function maxSequenceOfEle(arr) {
    let newArray = [];
    let firtsArray = [];
    for (let index = 0; index < arr.length; index++) {
        firtsArray = [];
        for (let j = index; j < arr.length; j++) {
            if (arr[index] === arr[j]) {
                firtsArray.push(arr[j]);

            } else {
                break;
            }


            if (firtsArray.length > newArray.length) {
                newArray = firtsArray;
            }
        }
    }
    console.log(newArray.join(" "))
}

maxSequenceOfEle([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])