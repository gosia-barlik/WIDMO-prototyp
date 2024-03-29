import React from "react";
import "./App.css";
import "./components/Landing.css";
import Landing from "./components/Landing";
import Creator from "./components/Creator/Creator";
import Rankomat from "./components/Rankomat/Rankomat";
import Header from "./components/common/Header.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/common/Login";
import SignUpForm from "./components/common/SignUp";
import UserDrawer from "./components/common/UserDrawer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <Header />
          <>
            <LoginForm />
            <SignUpForm />
            <UserDrawer />
            <Routes>
              {/* <Route element={<RequireAuth/>}>
                <Route exact path='/creator' element={<Creator />}></Route>
              </Route> */}
              {/* <Route exact path='/login' element ={<LoginForm/>}> </Route> - TODO -login form on routing */}
              <Route exact path='/creator/edit/:id' element={<Creator isEdit={true}/>}></Route>
              <Route exact path='/creator' element={<Creator isEdit={false}/>}></Route>
              <Route exact path='/rankomat' element={<Rankomat />}></Route>
              <Route exact path='/' element={<Landing />}></Route>
            </Routes>
          </>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
