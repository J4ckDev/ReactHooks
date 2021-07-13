import React from "react";
import ReactDOM from "react-dom";
//import FirstApp from "./FirstApp";
import CounterApp from "./CounterApp";
import "./index.css";

const divRoot = document.getElementById("root");

//ReactDOM.render(<FirstApp quien="Soy J4ckDev" info={"y tengo 25 años."} />, divRoot);
ReactDOM.render(<CounterApp value={100} />, divRoot);
