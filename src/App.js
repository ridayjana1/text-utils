import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
// import About from './components/About';
import Alert from './components/Alert'
import React, {useState} from 'react';
// import { Route, Routes, } from "react-router";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  }

  const toggleMode = ()=>{
    if(mode === "light"){
      setMode('dark')
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been enabled","success")
      document.title = "TextUtils - Dark Mode enabled"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled","success")
      document.title = "TextUtils - Light Mode Enabled"
    }
  }
  return (
    <>
    <Navbar title ="TextUtils" mode={mode}  about = "About" toggleMode={toggleMode}/>
    <Alert alert={alert}/>
      {/* <Router>
    <div className="container my-3">
    <Routes>
    <Route exact path="/About" element={<About/>} />
     <Route exact path="/" element={<TextForm showAlert={showAlert} Heading = "Enter the text to analyze below"  mode={mode}/>}/>
  </Routes>
    </div>
    </Router> */}
    <TextForm showAlert={showAlert} Heading = "Enter the text to analyze below"  mode={mode}/>
    </>
  );
}

export default App;
