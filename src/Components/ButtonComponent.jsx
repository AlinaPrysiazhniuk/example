import { useState } from "react";

export default function ButtonComponent({ onClick }) {
  const [count, setCount] = useState(0);

  const clickConut = () => {
    const newCount = count + 1;
    setCount(newCount);
    onClick(newCount);
  };
  console.log(count);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={clickConut}>Click me</button>
    </div>
  );
}
