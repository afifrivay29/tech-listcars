import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} exact />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
