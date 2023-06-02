//Original function
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

//Refractor the above function to use a rest operator and an arrow function
const filterOdds = (...nums) => {
  return nums.filter((num) => {
    return num % 2 === 0;
  });
};

//Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
const findMin = (...inputs) => {
  return inputs.reduce((min, num) => (num < min ? num : min), inputs[0]);
};

//Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
const mergeObjects = (obj1, obj2) => {
  let obj3 = { ...obj1, ...obj2 };
  return obj3;
};

//Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.
function doubleAndReturnArgs(arr, ...otherArgs) {
  const doubledArgs = otherArgs.map((arg) => {
    return arg * 2;
  });
  const finalArr = [...arr, ...doubledArgs];
  return finalArr;
}

//remove a random element in the items array and return a new array without that item.
const removeRandom = (...items) => {
  let length = items.length;
  let index = Math.floor(length * Math.random());
  items.splice(index, 1);
  return items;
};

//Return a new array with every item in array1 and array2.
const extend = (array1, array2) => {
  const newArr = [...array1, ...array2];
  return newArr;
};

//Return a new object with all the keys and values from obj and a new key/value pair.
const addKeyVal = (obj, key, val) => {
  const newObj = { ...obj, [key]: val };
  return newObj;
};

//Return a new object with a key removed.
const removeKey = (obj, key) => {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

//Combine two objects and return a new object.
const combine = (obj1, obj2) => {
  const newObj = { ...obj1, ...obj2 };
  return newObj;
};

//Return a new object with a modified key and value.
const update = (obj, key, val) => {
  const newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
