import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date(2024, 1, 4, 18).getHours();

console.log(currentTime);

function App() {
  return (
    <div className="container"> { 
        //Ternary
        isLoggedIn ? <h1>Hello</h1> : <Login />
        //AND operator
        //currentTime > 12 && <h1>Why r u still working?</h1>
  }</div>
  );
}

export default App;
