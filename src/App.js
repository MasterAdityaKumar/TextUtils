import { useState } from "react";
import "./App.css";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

// import {
//  BrowserRouter as Router,
//  Routes,
//   Route,
//   Link,
//   Outlet
// } from "react-router-dom";

function App() {
  const [mode ,setmode ] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{ 
    setAlert({
    msg : message,
    type : type

    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }
  
  

  const togglemode =() => {
    if (mode==="light"){ 
    setmode("dark")
    document.body.style.backgroundColor ="#042743"
    showAlert("Dark mode has been enabled", "success");
    
    
    }
    
    else{
      setmode("light")
      document.body.style.backgroundColor ="white"
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
    {/*<Router>*/}
      <Navbar title="TextOperations"  mode={mode}  togglemode={togglemode}  />
       {/*varmode ek variable hai jo mode ki value ko pass kar raha hai upar jo first wala var mode hai wo
       variable hai aur 2nd wala jo hai wo value of mode pass kar raha hai useState se bass. */}
      <div className="container my-3">
      <Alert alert={alert}/>
      
      
      
      
     {/* <Routes>
      <Route path="/" element={<TextForm heading="You can analyze below" showAlert={showAlert} mode={mode}  />}>
      </Route> 
      
        
     <Route path="/about" element={<About />}>
          
      
      </Route>
      </Routes>*/}
      <TextForm heading="You can analyze below" showAlert={showAlert} mode={mode}  />
        </div>
    {/*  </Router>*/}
    </> 
  );
}

export default App;

