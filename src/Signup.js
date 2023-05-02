import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { async } from "@firebase/util";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "./firebase";
const Signup = () => {
  const [email, setEmail] = useState("gautam@gmail.com");
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("password123");
  const [wins, setWins] = useState(0);
  //register
  const navigate = useNavigate();
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) navigate("/");
  });
  const register = async () => {
    console.log({ email, password });
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      axios
        .post(
          "https://elitmus-9autham-default-rtdb.firebaseio.com/register.json",
          { username, email, wins }
        )
        .then(() => alert("Submitted Sucessfuly"));
      const data = { email, password };
      localStorage.setItem("userInfo", JSON.stringify(data));
      console.log(user);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };
  return (
    <>
      <center>
        <div className="p-4 box">
          <h2 className="mb-3">Signup</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
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
              <Button onClick={register}>Sign up</Button>
            </div>
          </Form>
        </div>
        <div className="p-4 box mt-3 text-center">
          Already have an account? <Link to="/">Log In</Link>
        </div>
      </center>
    </>
  );
};

export default Signup;
