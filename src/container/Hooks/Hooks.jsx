import React, { useState, useEffect } from "react";

function Hooks(props) {
  const [count, setCount] = useState(2);

  useEffect(
    () => {
      document.title = `${count}`;
      //compoent will unmount
      return () => {
        document.title = `back to component will unmount`;
      };
    }
    //   , [input]
  );

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        update nilai
      </button>
    </div>
  );
}

export default Hooks;
