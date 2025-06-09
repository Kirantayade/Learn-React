import React from "react";
import ReactDOM from "react-dom/client"
  /* <div>
    <div>
        <h1></h1>
        <h1></h1>
    </div> child 
    <div>
        <h1></h1>
        <h1></h1>
    </div>
</div> */


const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "firstDiv" }, [
    React.createElement("h1",  {id:"firstHeading"}, "I am child heading h1"),
    React.createElement("h2", {id:"secondHeading"}, "I am child heading h2"),
  ]),
  React.createElement("div", { id: "secondDiv" }, [
    React.createElement("h1", {id:"thirdHeading"}, "I am child heading h1"),
    React.createElement("h2", {id:"fourthHeading"}, "I am child heading h2"),
  ])
]);

const root = ReactDOM.createRoot(document.getElementById('root1'));

root.render(parent);