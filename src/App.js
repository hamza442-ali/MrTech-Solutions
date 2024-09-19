import "./App.css";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route, //npm install react-router-dom
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import {LandingPage} from './pages/landingPage/LandingPage'




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<LandingPage />} />
        
        </Routes>
      </BrowserRouter>
    </>
  );
}





export default App;
