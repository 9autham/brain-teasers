import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useState } from "react";
import Rules from "./Rules";
import NavBar from "../NavBar";
import Game from "./Game";
import { Routes, Route, NavLink } from "react-router-dom";
function Game3() {
  return (
    <div className="">
      <h1>Cow&Bulls</h1>
      <Rules />
      <Game />
    </div>
  );
}

export default Game3;
