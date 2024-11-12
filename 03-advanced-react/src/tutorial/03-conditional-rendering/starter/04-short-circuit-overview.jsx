import { useState } from "react";

const ShortCircuitOverview = () => {
  const [var1, setVar1] = useState("");
  const [var2, setVar2] = useState("AAA");

  return (
    <div>
      <h2>"Falsy OR:" {var1 || "hello"}</h2>
      <h2>"Falsy AND:" {var1 && "hello"}</h2>
      <h2>"Truthy OR:" {var2 || "hello"}</h2>
      <h2>"Truthy AND:" {var2 && "hello"}</h2>
    </div>
  );
};
export default ShortCircuitOverview;
