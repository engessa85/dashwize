import "./sass/main.scss";
import "../src/bootstrap.min.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import UserHome from "./pages/UserHome";
import Dashboard from "./pages/Dashboard";
import DataImport from "./pages/DataImport";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PuffLoader, ScaleLoader } from "react-spinners";
import { useState, useEffect } from "react";
import FillForm from "./pages/FillForm";
import MtoMDahsboard from "./pages/MtoMDahsboard";
import SendEmail from "./pages/SendEmail";
import Insights from "./pages/Insights";


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
      {loader ? (
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
            <Route exact path="/userhome" element={<UserHome />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/dataimport" element={<DataImport />} />
            <Route exact path="/fillform" element={<FillForm />} />
            <Route exact path="/mtm" element={<MtoMDahsboard />} />
            <Route exact path="/email" element={<SendEmail />} />
            <Route exact path="/insights" element={<Insights />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
