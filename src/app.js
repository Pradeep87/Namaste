import React from "react";
import  ReactDOM  from "react-dom";


const parent = React.createElement("div", {}, [
  React.createElement("div", { id: "childOne" }, [
    React.createElement("h1", { id: "heading one" }, "heading one"),
    React.createElement("h1", { id: "heading two" }, "heading Two"),
  ]),
  React.createElement("div", { id: "childTwo" }, [
    React.createElement("h1", { id: "heading one" }, "heading one in child two"),
    React.createElement("h1", { id: "heading two" }, "heading Two in child two"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);
root.render(parent);
