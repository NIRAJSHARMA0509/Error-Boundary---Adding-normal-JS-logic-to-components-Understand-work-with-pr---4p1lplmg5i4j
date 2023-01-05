import React, { useState } from "react";
import "../styles/App.css";
import Component from "./Component";
import ErrorBoundary from "./ErrorBoundary";
const App = () => {

  const [errorStatus, setErrorStatus] = useState(false);
 
  const errorGenerator = () => {
    
    setErrorStatus(true);
  }

  return (

    <div id="main">
    <h2>React Error Boundaries</h2>
      <ErrorBoundary  >
       {errorStatus && <Component change={errorStatus} />}
      </ErrorBoundary>
      <button id="gen" onClick={errorGenerator}>Generate Error</button>
    </div>
  );
};

export default App;
