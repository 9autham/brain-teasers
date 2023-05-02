import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useState } from "react";
import NavBar from "../NavBar";
import Diffculties from "./Difficuties";
import { Routes, Route, NavLink } from "react-router-dom";
import CowBulls from "./CowBulls";
function Game3() {
  return (
    <div className="">
      <NavBar />
      <CowBulls />
      <Button onClick={() => window.location.reload()}>PLAY AGAIN</Button>
    </div>
  );
}

export default Game3;
