import React ,{useState} from "react";
import resdata from "./data/data.json";
import User from "../src/component/User";
// import Functions from "./handlers/Functions";
import {showCountRepElem} from './handlers/questions'

/*
1. Import data from data folder and console.
2. Display data using map function in User Component(Create User component)
      a. Create User component
      b. Pass data from app to user component
      c. Display Data in User Component
*/
// console.log(Data);
const App = () => {
  let arr = [1,1,1,1,1,1,22,2,3,2,2,3,4,5,6,7,8,9,10,10,10]
  
  showCountRepElem(arr);
  return (
    <div>
      <h1>Map Function</h1>
      {/* <User userData={resdata}/> */}


    </div>
  );
};
export default App;
