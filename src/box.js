import React from "react";
let currentBox;

const Box = (props) => {
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
  const { className, state } = props;
  console.log(state);
  return (
    <div className={className} onClick={(e) => giveClassOnclick(e)}>
      {state === "cricle" ? <div>asd</div> : <div>abc</div>}
    </div>
  );
};

export default Box;
