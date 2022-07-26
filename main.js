
// var, const, let
// var = the functional scope level
// const = the block scope level
// let = the block scope level 

// we can reassign var or let variables but we can not re assgin a new value to const variables


// Array helper methods
const nums = [1, 2, 3, 4, 5, 6];
function doubleArry() {
  //   const doubleArr = [];

  // for(let i=0; i<=nums.length; i++){
  //     doubleArr.push(nums[i]*2);
  // }

  // for(num of nums){
  //     doubleArr.push(num * 2);
  // }
  // return doubleArr;

  const doubleArrElem = nums.map((num) => num * 2); // map will work on array

  return doubleArrElem;
}
console.log(doubleArry());

function findElm(recArrElm) {
  return recArrElm.find((elm) => elm > 2);
}
console.log(findElm(nums));

// filter array helper method
const filter = (recAr) => {
  return recAr.filter((elm) => elm > 2);
};
console.log(filter(nums));

// Destructuring
const person = {
  firstName: "Saddam",
  lastName: "Hossen",
  phone: "01920066584",
  address: "Dhaka",
};

// const {firstName,lastName} = person;

// Rest operator
const { firstName, ...restvalues } = person;
console.log(firstName);
console.log(restvalues);
console.log(restvalues.phone);

// Spread operator
const newPerson = {
  ...person,
  gender: "Male",
  hobby: "Coding",
};

console.log(newPerson);

// Destructuring, rest, spread operators into Array
const arrElem = [1, 2, 3, 4, 5, 6];
const [num1, , num3, ...restOfValues] = arrElem;
console.log(num3);

const finalArray = [...arrElem, 5, 6, 7];
console.log(finalArray);

// Api calling mechanism

// callback
// promise = there is a three options in promises (pending, resolved, rejected)
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
//.then(err => console.log(err))


//async keyword should be mention before function 
async function asynExample() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1"); 
  const data = await res.json();
  console.log(data);
}
asynExample();

// Class examples
class Person {
  //name = 'Saddam'
  //age  = 30
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showDetails() {
    return this.name + " is " + this.age + " years old";
  }
}

const makeObject = new Person("Saddam", 30);
console.log(makeObject.name);
console.log(makeObject.showDetails());
