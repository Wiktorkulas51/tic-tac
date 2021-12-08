import React from "react";

const giveClassOnclick = (e) => {
  console.log(e.target.className);
  let currentBox = e.target.className;
  if (
    currentBox === `${currentBox} cross` ||
    currentBox === `${currentBox} circle`
  ) {
    alert("pole jest juz zajete!");
  } else {
    currentBox = currentBox + "cricle";
  }
};

const Box = (props) => {
  return (
    <div className={props.className} onClick={(e) => giveClassOnclick(e)}></div>
  );
};

export default Box;
