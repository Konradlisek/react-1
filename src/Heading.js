import { useState } from "react";
import "./Heading.css";

const Heading = () => {
  const [colorClass, setColorClass] = useState("");

  const changeColor = (newColorClass) => {
    setColorClass(newColorClass);
  };

  return (
    <div className="heading">
      <h1 className={colorClass}>Click and change the text color</h1>
      <div className="button-color">
        <button onClick={() => changeColor("green")}>Green Text</button>
        <button onClick={() => changeColor("red")}>Red Text</button>
        <button onClick={() => changeColor("blue")}>Blue Text</button>
      </div>
    </div>
  );
};
export default Heading;
