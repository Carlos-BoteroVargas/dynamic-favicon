// import './App.css';
import React from 'react';

import useTimeFavicon from "./hooks/useTimeFavicon"

function App(props) {
  useTimeFavicon()

  return (
    <div align='center'>
      Check the favicon! 
      <br />
      <br />
      It changes with the time. 🤯🤯🤯
    </div>
  );
}

export default App;
