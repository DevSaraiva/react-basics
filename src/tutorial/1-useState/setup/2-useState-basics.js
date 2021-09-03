import React, { useState } from 'react';

const UseStateBasics = () => {
  
  const handleClick = () => {
    if(text == 'Hello world') setText("Random Title");
    else setText('Hello world');
  }

  const [text,setText] = useState("Random Title");
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick = {handleClick}> change title</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
