import React, { useState } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import { Form, Alert, Navbar } from "react-bootstrap";
import { Button } from "react-bootstrap";
import NavBar from "./NavBar";
import Menu from "./Menu";
import Footer from "./Footer";
import Product from "./Product";
import GoogleButton from "react-google-button";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "./firebase";
import Products from "./Products";
// import { useUserAuth } from "../context/UserAuthContext";
const Home = () => {
  /*Important*/
  const [user, setUser] = useState(undefined);
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) setUser(currentUser);
    else navigate("/");
  });
  const navigate = useNavigate();
  const signout = async () => {
    signOut(auth);
    navigate("/");
  };
  return (
    <>
      <div className="d-grid gap-2">
        <NavBar />
        {/* <Menu /> */}
        <Products />
        {/* <Footer/> */}
      </div>
    </>
  );
};

export default Home;
