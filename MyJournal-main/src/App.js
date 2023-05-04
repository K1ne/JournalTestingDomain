
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import Auth from "./Auth"
import Push from "./Push"
import Pull from "./Pull"
import SharedPull from "./SharedPull"
import React, { Component } from "react";



function App() {

  // const navigate = useNavigate();

  // function navigateToPush(event) {

  //   navigate('/push');
  // }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="push" element={<Push/>}/>
        <Route path="pull" element={<Pull/>}/>
        <Route path="sharedpull" element={<SharedPull/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
