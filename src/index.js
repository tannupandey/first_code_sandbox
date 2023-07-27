import React from "react";
import ReactDOM from "react-dom";
import Style from "./styles.css";
// import Teddy,{favfood,myName, profession} from './App';  //as we exported some value by Default hence no matter what name we import it is simply going to return default value
import * as allvalues from "./App";
ReactDOM.render(
  <>
    <ol>
      <li> Tannu </li>
      <li> {allvalues.default} </li>
      <li> {allvalues.favfood} </li>
      <li> {allvalues.myName()} </li>
      <li> {allvalues.profession()} </li>
    </ol>
  </>,
  document.getElementById("root")
);
