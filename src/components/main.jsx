import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GodMovie from "./godMovie";
import NewMovie from "./add";
class Main extends Component {
  render() {
    return (
      <Routes>
        <Route path="/add" element={<NewMovie {...this.props} />} />
        <Route path="/" element={<GodMovie {...this.props} />} />
      </Routes>
    );
  }
}

export default Main;
