function filter(arr, filterFn) {
  const filterArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = filterFn(arr[i]); //0,1,2,3

    if (result) filterArr.push(arr[i]);
  }
  return filterArr;
}
let arr = [1, 2, 3, 4];
let output = filter(arr, (num) => num % 2);
console.log(output);
