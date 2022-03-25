import "./App.css";
import React, { useState, useEffect } from "react";
import { Button, Grid, Loading } from "@nextui-org/react";

function App() {
  // setInterval(getAdvice, 5000);

  window.onload = () => {
    getAdvice();
  };

  const [advice, setAdvice] = useState("");

  function getAdvice() {
    const data = fetch("	https://api.adviceslip.com/advice")
      .then((response) => {
        return response.json();
      })
      .then((adviceData) => {
        const Adviceobj = adviceData.slip;
  
        setAdvice(Adviceobj);
      })
      .catch((error) => {});
  }



  return (
    <div className="App">
      <div className="card_contaner">
        <p>Advice #{advice.id}</p>
        <h4> {advice.advice}</h4>
        <hr />
        <div className="btn"> 
        <Button auto ghost  color="success" css={{ px: "$10" }} onClick={getAdvice}>
                
       Get Advice  <Loading type="points" color="white" size="sm" />
       
        </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
