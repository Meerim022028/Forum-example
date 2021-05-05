import { useState } from "react";
import Input from "./input";
import './App.css';

function App() {
  const [] = useState(false);

  return (
    <div className="App">
     
        <Input type="text"
          name="input"
          id="Input"/>
          <button>Add</button>
<div>
          <ul>
         <li>{Input}</li>
      </ul>
      </div>
    </div>

  );
}

export default App;