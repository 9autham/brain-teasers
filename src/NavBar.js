import React, { useState } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import { Form, Alert, Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "./firebase";
function NavBar() {
  const [user, setUser] = useState(undefined);
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) setUser(currentUser);
    else navigate("/");
  });
  const navigate = useNavigate();
  const signout = async () => {
    signOut(auth);
    navigate("/");
    localStorage.clear();
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ "background-color": "#100c24", color: "#61dafb" }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            style={{ "background-color": "#100c24", color: "#61dafb" }}
            href="#"
          >
            Halley's Comet{" "}
            {<MDBIcon fab icon="react" style={{ color: "#61dafb" }} />}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navbarNav"
            id="navbarSupportedContent navbarNav"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  to="/Home"
                  style={{ "background-color": "#100c24", color: "#61dafb" }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  to="/contactus"
                  style={{ "background-color": "#100c24", color: "#61dafb" }}
                >
                  ContactUs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  to="/AboutUs"
                  style={{ "background-color": "#100c24", color: "#61dafb" }}
                >
                  AboutUs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="Profile"
                  className="nav-link active"
                  style={{ "background-color": "#100c24", color: "#61dafb" }}
                >
                  Profiles
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  onClick={signout}
                  className="nav-link active"
                  style={{ "background-color": "#100c24", color: "#61dafb" }}
                >
                  SignOut
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
