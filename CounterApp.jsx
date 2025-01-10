import { useState } from "react";
import "./counterstyle.css";

function CounterApp() {
  // State for counter
  const [count, setCount] = useState(0);

  // Increment function
  const increment = () => setCount(count + 1);

  // Decrement function
  const decrement = () => setCount(count - 1);

  // Reset function
  const reset = () => setCount(0);

  return (
    <>
    <h1 className="countheading">Counter App</h1>
    <div className="counterapp">
      <div className="shownumbers"><h2>{count}</h2></div>
      <div className="increamentsbtn">
        <button onClick={increment}>
            <span>
            <svg fill="#000000" height="16px" width="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
          viewBox="0 0 455 455">
        <polygon points="455,212.5 242.5,212.5 242.5,0 212.5,0 212.5,212.5 0,212.5 0,242.5 212.5,242.5 212.5,455 242.5,455 242.5,242.5 
          455,242.5 "/>
        </svg></span>
        </button>
        <button onClick={decrement}>
            <span>
                  <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
                  width="16px" height="16px" viewBox="0 0 83 83">
                  <g>
                    <path d="M81,36.166H2c-1.104,0-2,0.896-2,2v6.668c0,1.104,0.896,2,2,2h79c1.104,0,2-0.896,2-2v-6.668
                      C83,37.062,82.104,36.166,81,36.166z"/>
                  </g>
            </svg>
</span>
</button>
      </div>
      <button onClick={reset} className="reset">
        <span>
        <svg width="20px" height="20px" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
          <g fill="none"  stroke="#fff" transform="translate(2 2)">
          <path d="m12.5 1.5c2.4138473 1.37729434 4 4.02194088 4 7 0 4.418278-3.581722 8-8 8s-8-3.581722-8-8 3.581722-8 8-8"/>
          <path d="m12.5 5.5v-4h4"/>
          </g>
        </svg>
        </span><span>Reset</span></button>
    </div>
    </>
  );
}

export default CounterApp;
