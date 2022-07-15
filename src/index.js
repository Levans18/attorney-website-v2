import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  Practice  from "./pages/Practice/Practice"
import  Contact  from "./pages/Contact/Contact"
import  Home  from "./pages/Home/Home"
import  NavBar  from "./components/NavBar/NavBar"
import  Footer  from "./components/Footer/Footer"
import DivorceDissolution from "./pages/Practice/PracticeAreas/DivorceDissolution.jsx"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router className="grid">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice" element={<Practice />} >
            <Route path="/practice/Divorce-Dissolution" element={<DivorceDissolution/>}/>
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
