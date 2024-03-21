import React from "react";
import ReduxExamples from "./ReduxExamples";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariables";
import ObjectStateVariable from "./ObjectStateVariables";
import ArrayStateVariable from "./ArrayStateVariables";


function Assignment4() {
    function sayHello() {
      alert("Hello");
    }
    return (
      <div>
        <h1>Assignment 4</h1>
        <ReduxExamples />
        
        <PassingFunctions theFunction={sayHello} />
        <EventObject />
        <Counter />
        <BooleanStateVariables />
        <StringStateVariables />
        <DateStateVariable />
        <ObjectStateVariable />
        <ArrayStateVariable />

      </div>
    );
  }
  export default Assignment4;
  