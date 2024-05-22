// import "./styles.css";
import React, { useEffect, useState } from "react";
export default function Interval() {
  const [count, setCount] = useState(0);
  // console.log(count);

  var myInterval = setInterval(() => {
    for (let i = 1; i <= 10; i++) {
      setCount(i);
      // console.log("i", i);
    }
  }, 1000);


  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>count: {myInterval} </h2>
      <button onClick={() => clearInterval(myInterval)
      }>clear</button>
    </div>
  );
}
