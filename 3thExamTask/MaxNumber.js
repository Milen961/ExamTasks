function maxNumber(arr) {
  let topInteger = [];
  for (let index = 0; index < arr.length; index++) {
    let currElement = arr[index];
    let isTopInteger = true;
    for (let j = index + 1; j < arr.length; j++) {
      let nextEl = arr[j];
      if (currElement <= nextEl) {
        isTopInteger = false;
        break;
      }
    }

    if (isTopInteger) {
      topInteger.push(currElement)

    }


  }
  console.log(topInteger.join(" "));
}
maxNumber([1, 4, 3, 2])

