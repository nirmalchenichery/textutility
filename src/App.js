import './App.css';
import Navbar from './components/Navbar';
// import Greeting from './components/Greeting';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
// import { BrowserRouter as Router, 
//         Switch,
//          Route,
//          Link 
//         } from 'react-router-dom';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



function App() {

  const [alert,setAlert] = useState({});

  const showAlert = (message,type) =>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert({});
    },3000)
  }

  return (
    <>
      <Router>
        <Navbar title="TestUtils"/>
        
        <div className="container my-3">
          <Alert alert={alert}/>
        </div>

        {/* PropType Example  */}
        {/* <Greeting /> */}
        {/* <div className="container my-3">
          <TextForm heading="Enter the text"/>
        </div> */}
        {/* <About showAlert={showAlert}/> */}
      
        <Routes>
            <Route path="/about" element={<About showAlert={showAlert}/> } />
            <Route path="/" element={ <TextForm heading="Enter the text"/> } />
        </Routes>

      </Router>
    </>
   );
}
export default App;
