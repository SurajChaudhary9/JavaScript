function forEach(arr, funct) {
  for (let i = 0; i < arr.length; i++) {
    funct(arr[i]);
  }
}

//**Array to be iterated**//
let arr = [5, 6, 7, 8];

//**All values will be assigned to num parameter**//
forEach(arr, (num) => {
  console.log(num);
});
