import { use, useEffect, useState } from "react";
import "./App.css";
import AboutUs from "./page/Aboutus";

function App() {
  const [count, setCount] = useState<number>(0);
  const [Name, setName] = useState<string>("yug");

  useEffect(() => {
    console.log(`count change ${count}`);
  }, [count]);

  return (
    <>
      <h1 className="head">react + typescript</h1>
      <AboutUs name={Name} age={21} />
      <input type="text" name="name" value={Name} onChange={(e) => setName(e.target.value)} placeholder='enter name' />
      <button onClick={() => setCount(count + 1)}>clicked</button>
    </>
  );
}

export default App;
