import React from "react";
import Image from "./image";
import { Dropdown } from "rsuite";
import { Link, useNavigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
function Game1Product(props) {
  return (
    <div className="card card-body bg-light border-light">
      {/* <p className="">
        {props.productObj.qno}
        {props.productObj.q}
      </p>
      <br />
      <Dropdown title="Reveal Answer">
        <Dropdown.Item>{props.productObj.ans}</Dropdown.Item>
      </Dropdown> */}
      <div class="container card w-75">
        <div class="card-body">
          <h5 class="card-title">{props.productObj.qno}BrainTeaser</h5>
          <p class="card-text">{props.productObj.q}</p>
          <Dropdown title="Reveal Answer">
            <Dropdown.Item>{props.productObj.ans}</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Game1Product;
