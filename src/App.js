// import logo from './logo.svg';
import './App.css';
// import About from './components/DarkMode';
import Navbar from './components/Navbar';
import TextForms from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [btnText, setBtnText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null)
  
  const showAlert = (message , type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
       setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setBtnText('Enable light Mode');
      document.body.style.backgroundColor = '#0f1743';
      showAlert("Dark mode has been enabled", "Success");
      document.title = "TextUtils - Dark"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setBtnText('Enable Dark Mode');
      showAlert("Light mode has been enabled", "Success");
      document.title = "TextUtils - Light"
      // showAlert();      
    }
  }
  return (
    <> 
      {/* onLoad();   */}
      <Navbar tittle="TextUtil" mode = {mode} toggleMode = {toggleMode} btnText = {btnText} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForms showAlert = {showAlert} heading="Enter Your name" mode = {mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
