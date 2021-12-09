import React from "react";
let currentBox;

const giveClassOnclick = (e) => {
  console.log(e.target.className);
  currentBox = e.target.className;
  if (
    currentBox === `${currentBox} cross` ||
    currentBox === `${currentBox} circle`
  ) {
    alert("pole jest juz zajete!");
  } else {
    currentBox += " cricle";
    console.log(currentBox);
  }
};

const Box = (props) => {
  return (
    <div className={props.className} onClick={(e) => giveClassOnclick(e)}></div>
  );
};

export default Box;
