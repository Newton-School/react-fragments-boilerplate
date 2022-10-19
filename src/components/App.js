import React, { useState, useEffect, Fragment } from "react";
import '../styles/App.css';
import List from "./List";

const App = () => {
 
//code here

  return (
    <div id="main">

      <input id="input" onChange={onInputChange} />
      <button id="button" onClick={onButtonClick}>Click</button>
       <ul id="list">
      <List listx={list} />
      </ul>
    </div>
  );
};

export default App;