import React from "react";
import ReactDOM from "react-dom";
//import FirstApp from "./FirstApp";
import CounterApp from "./CounterApp";
import "./index.css";

const divRoot = document.getElementById("root");

//ReactDOM.render(<FirstApp quien="Soy J4ckDev" info={"Desarrollador web"} />, divRoot);
ReactDOM.render(<CounterApp />, divRoot);
