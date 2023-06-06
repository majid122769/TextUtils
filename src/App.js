
import './App.css';
//  import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/textForm';
import React, { useState } from "react";
import Alert from './component/alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light')
  const [statusMode, setstatusMode] = useState('enable dark mode');
  const [alert, setalert] = useState(null)
  const showAlert =(message,type)=>{
    setalert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
      
    }, 1500);

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = ("#042743");
      setstatusMode("disable dark mode");
      showAlert("dark mode has been activated","success");
      document.title = 'Textutils - Light mode';
      // setInterval(() => {
      //   document.title = "textUtils is amazing";
      // },2000);
      // setInterval(() => {
      //   document.title = "Install Textutils now";
      // }, 1500)
      

    }
    else {
      setmode('light');
      document.body.style.backgroundColor = ("white");
      setstatusMode("Enable Dark mode");
      showAlert("Light mode has been activated","success"); 
      document.title = 'Textutils - Dark mode';

    }
  }
  return (
    // <Router>
    <>
      <Navbar title="TextUtils" mode={mode} aboutText="about us here" toggleMode={toggleMode} statusMode={statusMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      {/* <Routes> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/" element={ */}
          <TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode} />
          {/* } /> */}
        {/* </Routes> */}
      </div>
    </>
    // </Router>


  );
}
export default App;
