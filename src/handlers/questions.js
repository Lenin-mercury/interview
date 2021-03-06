// ================>  1. remove Duplicate elements from array

export const removeDuplicates = (arr) => {
  let outputArray = Array.from(new Set(arr));
  console.log(arr, outputArray);
};

//=================> 2. Shows the count of repeated elements in array
export const showCountRepElem = (arr) => {
  //   const obj = {};
  //   //first loop to find the no of duplicates in an array and store it in the object
  //   for (let i of arr) obj[i] ? obj[i]++ : (obj[i] = 1);
  //   //second loop to display that array in the desired format
  //   for (const key in obj) {
  //     console.log(`${key} is repeated ${obj[key]} times`);
  //   }

  // //===================Using Reduce function================================
  // const output = arr.reduce((b, c) => {
  //   b[c] = (b[c] || 0) + 1;
  //   return b;
  // }, {});
  // console.log(output);
// for(let i of arr){
// console.log()
// }
};

//========================> 3. Difference between two arrays

var first = [1, 2, 3, 4, 5];
var second = [4, 5, 6];
var difference = first.filter((x) => second.indexOf(x) === -1);
console.log(difference);

// export const filterFunc = (arr) => {
//   const filteredItems = arr.find((item) => {
//     return item === "a";
//   });
//   console.log(filteredItems);
// };

//============================>  4. Reduce method
export const reduceMethod = (arr, key) => {
  // const total = arr.reduce((currentTot, item) =>{
  //     return item + currentTot
  // }, )
  // console.log(total);

  const output = arr.reduce((obj, item) => {
    return obj[item];
  }, {});
  console.log(output);
};

export const yolo = () => {
  var a = 10;

  function x() {
    console.log(2);
  }

  setTimeout(x, 1000);
  console.log(3);
  var a = 10;

//   function x() {
//     console.log(2);
//   }

//   setTimeout(x, 0);
//   console.log(3);
};


export const reduce1 = (array) => {
 const reducedOut = array.reduce((acc, person) =>{
    return {...acc, [person.userid]:person }
  }, {})
  console.log(reducedOut);
}

export const reduce2 = (array) => {

    //=================>  create object using array
 const newObj = Object.assign({}, array)


 //count number of repeatation
 const reducedOut = array.reduce((acc, person, key) =>{
  //  console.log("key",key)
  //  console.log("person",person)
   console.log("acc", acc, person)
    acc[person] = (acc[person] || 0) + 1
    return acc
  }, {})
  console.log(reducedOut);

// console.log(newObj);

}


let arr = [[10,141,15,1,100],[11,15,45]]
// +1

// arr = [[11,142,16,2,101],[12,13,46]]

// const numbers = [[1, 1, 1], [2,2,2]];

const newNumbers = arr.map(function increment(number) {
     const newArray = number.map((item) => {
  return item + 1
  })
return newArray
});


console.log(newNumbers);

///=============> Promise function

//================>  promise

const setTimer = duration => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      /* resolve('Done!') */
      reject("Rejected")
    }, duration);
  });
  return promise;
};


setTimer(2000).then((data)=> {
  console.log(data);
}
/* err =>{
  console.log(err);
}
 */
).catch(err =>{
console.log("catched error", err)
})

