import React from "react";
import Game1Products from "./Game1Products";
import NavBar from "../NavBar";
import { Routes, Route, NavLink } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
function Game1() {
  return (
    <div className="">
      <NavBar />
      <Game1Products />
      <NavLink className="nav-link active" to="/Home">
        <button type="button" to="/Home" className="btn btn-primary">
          Home
        </button>
      </NavLink>
    </div>
  );
}

export default Game1;
