import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import "./sass/main.scss";
import "../src/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PuffLoader, ScaleLoader } from "react-spinners";
import { useState, useEffect } from "react";

function App() {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  return (
    <>
      {false ? (
        <div className="preloader">
          <div className="preloader__circle">
            <PuffLoader color="#FFFFFF" size={250} />
            <div className="preloader__content">
              <img src="/assets/primary_logo.png" alt=" " />
              <ScaleLoader color="#22C55E" />
            </div>
          </div>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
