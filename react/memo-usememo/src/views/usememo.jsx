import { useState, useMemo } from "react";

export default function Usememo() {
  const [counter, setCounter] = useState(0);

  const testUseMemo = () => {
    console.log("Hello");
  };
  //without useMemo after counter increament testUseMemo to rerednered
  // testUseMemo()
  
  //with useMemo not rendered
  useMemo(() => testUseMemo(), []);

  return (
    <>
      <h1>Use Memo</h1>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increament</button>
    </>
  );
}
