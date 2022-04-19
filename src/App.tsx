import React, { useState } from "react";
import "./App.css";
import { NumberScroll } from "@hardiknaik/react-number-scroll";

function App() {
  const [number, setNumber] = useState(444);
  const [number1, setnumber1] = useState(-444.444);
  const random = () => {
    setNumber(Math.random()*(10000.00-1.00+1.00)+1.00);
    setnumber1(Math.random()*(10000.00-1.00+1.00)+1.00);
  };

  const incdec=(e)=>{
    if(e.target.textContent==="Increase"){
      setNumber(pre=>pre+1.11)
      setnumber1(pre=>pre+1.11)
    }else{
      setNumber(pre=>pre-1.11)
      setnumber1(pre=>pre-1.11)
    }
  }
  return (
    <div className="App">
      <div style={{display:'flex'}}>
        $
        <NumberScroll number={number} />
      </div>
      <div>
        <button onClick={incdec}>Increase</button>
        <button onClick={random}>random</button>
        <button onClick={incdec}>decrease</button>
      </div>
      <div style={{display:'flex'}}>
        <NumberScroll number={number1} />
        %
      </div>
    </div>
  );
}

export default App;
