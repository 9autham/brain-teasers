import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
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
// import { useUserAuth } from "../context/UserAuthContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState({});
  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) navigate("/Home");
  });
  const navigate = useNavigate();
  const login = async () => {
    setError("");
    console.log({ email, password });
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      const data = { email, password };
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };
  const googlesignin = async () => {
    setError("");
    console.log({ email, password });
    const data = { email, password };
    localStorage.setItem("userInfo", JSON.stringify(data));
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  };
  return (
    <>
      <center>
        <h1>eLitmus</h1>
        <div className="p-4 box">
          <h2 className="mb-3">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button onClick={login}>Log In</Button>
            </div>
          </Form>
          <hr />
          <div>
            <GoogleButton
              onClick={googlesignin}
              className="g-btn"
              type="dark"
            />
          </div>
        </div>
        <div className="p-4 box mt-3 text-center">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </center>
    </>
  );
};

export default Login;
