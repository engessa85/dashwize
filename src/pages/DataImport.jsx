import React from "react";
import TopBar from "../components/TopBar";
import Search from "../components/Search";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import AllDataInput from "../components/AllDataInput";
import FilesDataInput from "../components/FilesDataInput";
import DatabaseDataInput from "../components/DatabaseDataInput";
import ErpDataInput from "../components/ErpDataInput";
import EccoemerceInputData from "../components/EccoemerceInputData";
import SignInUpLoader from "../components/SignInUpLoader"

function DataImport() {
  const [all, setAll] = useState(false);
  const [files, setFiles] = useState(false);
  const [database, setDatabase] = useState(false);
  const [erp, setErp] = useState(false);
  const [eccomerce, setEccomerce] = useState(false);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 1000)
    setAll(true);
  }, []);
  const handelAll = () => {
    setAll(true);
    setFiles(false);
    setDatabase(false);
    setErp(false);
    setEccomerce(false);
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 1000)
  };
  const handelFiles = () => {
    setAll(false);
    setFiles(true);
    setDatabase(false);
    setErp(false);
    setEccomerce(false);
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 1000)
  };
  const handelDatabase = () => {
    setAll(false);
    setFiles(false);
    setDatabase(true);
    setErp(false);
    setEccomerce(false);
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 1000)
  };
  const handelErp = () => {
    setAll(false);
    setFiles(false);
    setDatabase(false);
    setErp(true);
    setEccomerce(false);
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 1000)
  };
  const handelEccomerce = () => {
    setAll(false);
    setFiles(false);
    setDatabase(false);
    setErp(false);
    setEccomerce(true);
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 1000)
  };
  return (
    <>
      <TopBar />
      <div className="dataimportcontainer">
        <div className="wrapper">
          <div className="wrapper__upside">
            <div className="wrapper__upside__left">
              <h1>Import Your Data</h1>
              <p>
                Import your data from a wide variety of sources to create
                insightful reports & dashboards
              </p>
            </div>
            <div className="wrapper__upside__right">
              <Search />
            </div>
          </div>
          <hr />

          <div className="wrapper__downside">
            <div className="wrapper__downside__left">
              <h1>Category</h1>
              <ul>
                <li>
                  <Link
                    style={{ color: all ? "black" : "" }}
                    onClick={handelAll}
                  >
                    All
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: files ? "black" : "" }}
                    onClick={handelFiles}
                  >
                    Files
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: database ? "black" : "" }}
                    onClick={handelDatabase}
                  >
                    Database
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: erp ? "black" : "" }}
                    onClick={handelErp}
                  >
                    ERP Softwares
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: eccomerce ? "black" : "" }}
                    onClick={handelEccomerce}
                  >
                    E-Commerce
                  </Link>
                </li>
              </ul>
            </div>
            <div className="wrapper__downside__right">
            {all? loading ? <SignInUpLoader middleCircleColor={"#2A3342"} /> :<AllDataInput /> :'' }
            {files? loading ? <SignInUpLoader middleCircleColor={"#2A3342"} /> :<FilesDataInput /> :'' }
            {database? loading ? <SignInUpLoader middleCircleColor={"#2A3342"} /> :<DatabaseDataInput /> :'' }
            {erp? loading ? <SignInUpLoader middleCircleColor={"#2A3342"} /> :<ErpDataInput /> :'' }
            {eccomerce? loading ? <SignInUpLoader middleCircleColor={"#2A3342"} /> :<EccoemerceInputData /> :'' }
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DataImport;
