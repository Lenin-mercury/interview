import React ,{useState} from "react";
import resdata from "./data/data.json";
import User from "../src/component/User";
// import Functions from "./handlers/Functions";

/*
1. Import data from data folder and console.
2. Display data using map function in User Component(Create User component)
      a. Create User component
      b. Pass data from app to user component
      c. Display Data in User Component
*/
// console.log(Data);
const App = () => {
  return (
    <div>
      <h1>Map Function</h1>
      <User userData={resdata} name="Dhivya"/>
    </div>
  );
};
export default App;
