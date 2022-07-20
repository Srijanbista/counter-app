import React, { useEffect, useState } from "react";
import "./styles/Counter.css";
function Counter() {
  let [count, setCount] = useState(0);

  document.getElementById("title").innerHTML = `Count-${count}`;
  return (
    <div className="background">
      <div className="new">
        <h1>Counter</h1>
        <div className="counter">
          <button
            onClick={() => {
              count ? setCount(--count) : setCount(count);
            }}
            disabled={!count}
          >
            -
          </button>
          <h1>{count}</h1>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
        </div>
        <div className="reset">
          <button
            onClick={() => {
              setCount(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
