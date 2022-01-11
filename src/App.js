import React from "react";
import "./App.css";
import "./components/Landing.css";
import Landing from "./components/Landing";
import Creator from "./components/Creator/Creator";
import Rankomat from "./components/Rankomat/Rankomat"
import Header from "./components/common/Header.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <Header />
          <>
            <Routes>
              <Route exact path='/' element={<Landing />}></Route>
              <Route exact path='/creator' element={<Creator />}></Route>
              <Route exact path='/rankomat' element={<Rankomat />}></Route>
            </Routes>
          </>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
