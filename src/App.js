import React, { Component } from "react";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateUserPage from "./pages/CreateUserPage";
import EditUserPage from "./pages/EditUserPage";
import DetailUserPage from "./pages/DetailUserPage";

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/create" exact element={<CreateUserPage />} />
            <Route path="/detail/:id" exact element={<DetailUserPage />} />
            <Route path="/edit/:id" exact element={<EditUserPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
