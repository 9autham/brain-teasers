import React from "react";
import Image from "./image";
import { Link, useNavigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
function Product(props) {
  return (
    <div className="card card-body bg-light border-light">
      <NavLink className="nav-link active" to={props.productObj.direct}>
        <Image src={props.productObj.productImage0} />
        <p className="">{props.productObj.productName}</p>
      </NavLink>
    </div>
  );
}

export default Product;
