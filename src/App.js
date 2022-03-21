import React ,{useState} from "react";
import resdata from "./data/data.json";
import User from "../src/component/User";
// import Functions from "./handlers/Functions";
import {showCountRepElem} from './handlers/questions'
import { getModifiedArray } from "./dentalFunction";


/*
1. Import data from data folder and console.
2. Display data using map function in User Component(Create User component)
      a. Create User component
      b. Pass data from app to user component
      c. Display Data in User Component
*/
// console.log(Data);
const App = () => {
  // let arr = [1,1,1,1,1,1,22,2,3,2,2,3,4,5,6,7,8,9,10,10,10]
  
  // showCountRepElem(arr);
  const planMax = [
    {
        "time_qualifier":"Yearly-Plan-Limit",
        "plan_maximum_for_benefit":"Dental",
        "amount":"$1500.00",
        "network_name":"Out-Network"
    },
    {
        "time_qualifier":"Yearly-Plan-Limit",
        "plan_maximum_for_benefit":"Dental",
        "amount":"$1500.00",
        "network_name":"In-Network"
    },

    {
        "time_qualifier":"Year-Met-To-Date",
        "plan_maximum_for_benefit":"Dental",
        "amount":"$0.00",
        "network_name":"In-Network"
    },
    {
        "time_qualifier":"Year-Met-To-Date",
        "plan_maximum_for_benefit":"Dental",
        "amount":"$0.00",
        "network_name":"Out-Network"
    },

    {
        "time_qualifier":"Lifetime-Met-To-Date",
        "plan_maximum_for_benefit":"Dental",
        "amount":"N/A",
        "network_name":"Out-Network"
    },
    
    {
        "time_qualifier":"Lifetime-Met-To-Date",
        "plan_maximum_for_benefit":"Dental",
        "amount":"N/A",
        "network_name":"In-Network"
    },
    {
        "time_qualifier":"Lifetime-Plan-Limit",
        "plan_maximum_for_benefit":"Dental",
        "amount":"N/A",
        "network_name":"Out-Network"
    },
    {
        "time_qualifier":"Lifetime-Plan-Limit",
        "plan_maximum_for_benefit":"Dental",
        "amount":"N/A",
        "network_name":"In-Network"
    },
    
    {
        "time_qualifier":"Yearly-Plan-Limit",
        "plan_maximum_for_benefit":"Orthodontic",
        "amount":"$1500.00",
        "network_name":"Out-Network"
    },
    {
        "time_qualifier":"Yearly-Plan-Limit",
        "plan_maximum_for_benefit":"Orthodontic",
        "amount":"$1500.00",
        "network_name":"In-Network"
    },

    {
        "time_qualifier":"Year-Met-To-Date",
        "plan_maximum_for_benefit":"Orthodontic",
        "amount":"$0.00",
        "network_name":"In-Network"
    },
    {
        "time_qualifier":"Year-Met-To-Date",
        "plan_maximum_for_benefit":"Orthodontic",
        "amount":"$0.00",
        "network_name":"Out-Network"
    },

    {
        "time_qualifier":"Lifetime-Met-To-Date",
        "plan_maximum_for_benefit":"Orthodontic",
        "amount":"N/A",
        "network_name":"Out-Network"
    },
    
    {
        "time_qualifier":"Lifetime-Met-To-Date",
        "plan_maximum_for_benefit":"Orthodontic",
        "amount":"N/A",
        "network_name":"In-Network"
    },
    {
        "time_qualifier":"Lifetime-Plan-Limit",
        "plan_maximum_for_benefit":"Orthodontic",
        "amount":"N/A",
        "network_name":"Out-Network"
    },
    {
        "time_qualifier":"Lifetime-Plan-Limit",
        "plan_maximum_for_benefit":"Orthodontic",
        "amount":"N/A",
        "network_name":"In-Network"
    },
    

]

 console.log(getModifiedArray(planMax), "---------resulted array-------"); 
  return (
    <div>
      <h1>Map Function</h1>
      {/* <User userData={resdata}/> */}


    </div>
  );
};
export default App;