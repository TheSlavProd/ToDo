import React, { useState } from "react";
import ShowCount from "./ShowCount";
import ChangeCount from "./ChangeCount";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ShowCount />
      <ChangeCount />
    </div>
  );
}

export default Counter;
