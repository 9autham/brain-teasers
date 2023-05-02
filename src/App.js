import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Game1 from "./Game1/Game1";
import Game2 from "./Game2/Game2";
import Game3 from "./Game3/Game3";
import Game4 from "./Game4/Game4";
import Contactus from "./ContactUs";
import AboutUs from "./AboutUs";
import Home from "./Home";
export default function App() {
  return (
    <div className="App">
      {/* <h1>eLitmus</h1> */}
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Game1" element={<Game1 />} />
        <Route path="/Game2" element={<Game2 />} />
        <Route path="/Game3" element={<Game3 />} />
        <Route path="/Game4" element={<Game4 />} />
        <Route path="/Game5" element={<Game4 />} />
        <Route path="/Game6" element={<Game4 />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </div>
  );
}
