import React,{useState} from 'react';
const CounterComponent=()=>{
    const [count,setCount]= useState(12);
    return(
        <div>
        <p>Size of TODO items-{count}</p>
        <button onClick ={()=> setCount(count+1)}> Increment </button>
        <button onClick ={()=> setCount(count-1)}> Decrement </button>
       
       
        </div>
        
    );
};
export default CounterComponent;
