import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import  Practice  from "./pages/Practice/Practice"
import  Contact  from "./pages/Contact/Contact"
import  Home  from "./pages/Home/Home"
import  NavBar  from "./components/NavBar/NavBar"
import  Footer  from "./components/Footer/Footer"
import DivorceDissolution from "./pages/Practice/PracticeAreas/DivorceDissolution"
import FamilyLaw from "./pages/Practice/PracticeAreas/FamilyLaw"
import LandlordTenant from "./pages/Practice/PracticeAreas/LandlordTenant"
import Discrimination from "./pages/Practice/PracticeAreas/Discrimination"
import SexualHarrassment from "./pages/Practice/PracticeAreas/SexualHarrassment"
import PersonalInjury from "./pages/Practice/PracticeAreas/PersonalInjury"
import UnemploymentAppeals from "./pages/Practice/PracticeAreas/UnemploymentAppeals"


/*
  Site split into 3 pages
    Home - introduction to Todd-Evans and a preview to other pages
    Practice - or practice areas to give context on Todd's experience
    Contact - includes contact information 
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router className="grid">
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice" element={<Practice />}>
            <Route index className="initial-shade" element={<DivorceDissolution />} />
            <Route path="/practice/Divorce-Dissolution" element={<DivorceDissolution/>}/>
            <Route path="/practice/Family-Law" element={<FamilyLaw/>}/>
            <Route path="/practice/Landlord-Tenant" element={<LandlordTenant/>}/>
            <Route path="/practice/Discrimination" element={<Discrimination/>}/>
            <Route path="/practice/Sexual-Harrassment" element={<SexualHarrassment/>}/>
            <Route path="/practice/Personal-Injury" element={<PersonalInjury/>}/>
            <Route path="/practice/Unemployment-Appeals" element={<UnemploymentAppeals/>}/>
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
