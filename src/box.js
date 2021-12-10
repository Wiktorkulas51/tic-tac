import React from "react";
import obj from "./win";
let allNumers = [];

const Box = (props) => {
  const { className, state } = props;

  const equalArray = (a, b) => {
    return a.length === b.length && a.every((val, index) => val === b[index]);
  };
  const filter = (array) => {
    return array.filter((val) => val >= 1);
  };
  const giveClassOnclick = (e) => {
    let currentBox = e.target.className;

    if (e.target.innerHTML === "circle" || e.target.innerHTML === "cross") {
      alert("pole jest juz zajete!");
    } else {
      e.target.innerHTML = state;
    }
    const numberOfBox = currentBox.split(" ");
    allNumers.push(numberOfBox[1]);
    console.log(filter(allNumers));
    if (equalArray(allNumers, obj.win1)) console.log("win");
  };
  return <div className={className} onClick={(e) => giveClassOnclick(e)}></div>;
};

export default Box;
