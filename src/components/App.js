
import React from "react";
import './../styles/App.css';

const App = () => {
  const [count,setCount]=useState(0);
  const handleButtonClick=()=>{
    setCount(count+1);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <button onClick={handleButtonClick}>Click me</button>
        <p>Button Clicked{count}times</p>
    </div>
  )
}

export default App;
