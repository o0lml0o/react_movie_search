import logo from './logo.svg';
import {useState,useEffect} from "react";
import './App.css';

const App=() => {
    const [counter,setcounter]= useState(0);
    useEffect(()=>{
       alert('you chenged counter to '+counter);
    },[counter]);
  return (
    <div className="App">
        <button onClick={()=> setcounter((prevCount)=>prevCount-1)}>-</button>
        <h1>{counter}</h1>
        <button onClick={()=> setcounter((prevCount)=>prevCount+1)}>+</button>

    </div>
  );
}

export default App;
