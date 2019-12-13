import React from "react";
import ReactDOM from "react-dom";
import Root from "../component/root";

const element = document.createElement("div");
element.id = "root";
document.body.appendChild(element);

ReactDOM.render(<Root />, document.getElementById("root"));
