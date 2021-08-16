import React, { useState } from "react";

function Hooks(props) {
  const [count, setCount] = useState(2);

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
