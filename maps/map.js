function map(arr, mapFn) {
  const mapArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = mapFn(arr[i]); //0,1,2,3
    mapArr.push(result);
  }
  return mapArr;
}

let arr = [2, 3, 4, 5];
arr = map(arr, (num) => num ** 2); //^2=**2
console.log(arr);
