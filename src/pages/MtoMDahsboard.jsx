import React, { useEffect, useState, useRef } from "react";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { RiDashboardFill } from "react-icons/ri";
import { BsFilePdfFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdInsights } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { BiSolidFilePng } from "react-icons/bi";
import { FaFileExport } from "react-icons/fa6";
import { BiSolidRightArrow } from "react-icons/bi";
import { RiChatHistoryFill } from "react-icons/ri";
import getMtMApiCall from "../services/getMtMApiCall";
import { useDispatch, useSelector } from "react-redux";
import SignInUpLoader from "../components/SignInUpLoader";

import { exportComponentAsPNG } from "react-component-export-image";

function MtoMDahsboard() {
  const mtmactual = useSelector((state) => state.mtm.mtmdataActual);
  const mtmtarget = useSelector((state) => state.mtm.mtmdataTarget);
  const {
    getTotalActualvalue,
    getTotalTargetValue,
    getTotalDays,
    getTotalTimes,
    pending,
    error,
  } = useSelector((state) => state.getmtm);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openHistory, setOpenHistory] = useState(false);
  const [openExporting, setOpenExporting] = useState(false);
  const [index, setIndex] = useState(0);
  const chartref = useRef(null);

  useEffect(() => {
    getMtMApiCall(dispatch);

    if (error === true) {
      localStorage.removeItem("accesstoken");
      localStorage.removeItem("refreshtoken");
      localStorage.removeItem("email");
      navigate("/");
    }
  }, []);

  let data;

  if (index === 0) {
    data = [
      {
        name: "January",
        EBIT_ACTUAL: mtmactual[0],
        EBIT_TARGET: mtmtarget[0],
      },
      {
        name: "February",
        EBIT_ACTUAL: mtmactual[1],
        EBIT_TARGET: mtmtarget[1],
      },
      {
        name: "March",
        EBIT_ACTUAL: mtmactual[2],
        EBIT_TARGET: mtmtarget[2],
      },
      {
        name: "April",
        EBIT_ACTUAL: mtmactual[3],
        EBIT_TARGET: mtmtarget[3],
      },
      {
        name: "May",
        EBIT_ACTUAL: mtmactual[4],
        EBIT_TARGET: mtmtarget[4],
      },
      {
        name: "June",
        EBIT_ACTUAL: mtmactual[5],
        EBIT_TARGET: mtmtarget[5],
      },
      {
        name: "July",
        EBIT_ACTUAL: mtmactual[6],
        EBIT_TARGET: mtmtarget[6],
      },
      {
        name: "August",
        EBIT_ACTUAL: mtmactual[7],
        EBIT_TARGET: mtmtarget[7],
      },
      {
        name: "September",
        EBIT_ACTUAL: mtmactual[8],
        EBIT_TARGET: mtmtarget[8],
      },
      {
        name: "October",
        EBIT_ACTUAL: mtmactual[9],
        EBIT_TARGET: mtmtarget[9],
      },
      {
        name: "November",
        EBIT_ACTUAL: mtmactual[10],
        EBIT_TARGET: mtmtarget[10],
      },
      {
        name: "December",
        EBIT_ACTUAL: mtmactual[11],
        EBIT_TARGET: mtmtarget[11],
      },
    ];
  } else {
    data = [
      {
        name: "January",
        EBIT_ACTUAL: getTotalActualvalue[index][0],
        EBIT_TARGET: getTotalTargetValue[index][0],
      },
      {
        name: "February",
        EBIT_ACTUAL: getTotalActualvalue[index][1],
        EBIT_TARGET: getTotalTargetValue[index][1],
      },
      {
        name: "March",
        EBIT_ACTUAL: getTotalActualvalue[index][2],
        EBIT_TARGET: getTotalTargetValue[index][2],
      },
      {
        name: "April",
        EBIT_ACTUAL: getTotalActualvalue[index][3],
        EBIT_TARGET: getTotalTargetValue[index][3],
      },
      {
        name: "May",
        EBIT_ACTUAL: getTotalActualvalue[index][4],
        EBIT_TARGET: getTotalTargetValue[index][4],
      },
      {
        name: "June",
        EBIT_ACTUAL: getTotalActualvalue[index][5],
        EBIT_TARGET: getTotalTargetValue[index][5],
      },
      {
        name: "July",
        EBIT_ACTUAL: getTotalActualvalue[index][6],
        EBIT_TARGET: getTotalTargetValue[index][6],
      },
      {
        name: "August",
        EBIT_ACTUAL: getTotalActualvalue[index][7],
        EBIT_TARGET: getTotalTargetValue[index][7],
      },
      {
        name: "September",
        EBIT_ACTUAL: getTotalActualvalue[index][8],
        EBIT_TARGET: getTotalTargetValue[index][8],
      },
      {
        name: "October",
        EBIT_ACTUAL: getTotalActualvalue[index][9],
        EBIT_TARGET: getTotalTargetValue[index][9],
      },
      {
        name: "November",
        EBIT_ACTUAL: getTotalActualvalue[index][10],
        EBIT_TARGET: getTotalTargetValue[index][10],
      },
      {
        name: "December",
        EBIT_ACTUAL: getTotalActualvalue[index][11],
        EBIT_TARGET: getTotalTargetValue[index][11],
      },
    ];
  }

  return (
    <>
      <TopBar />
      <div className="mtmmaincontainer">
        <div className="mtmmaincontainer__wrapperleft">
          <ul>
            <li>
              <div className="inner">
                <RiDashboardFill /> <span>Dashboard</span>
              </div>
            </li>

            <li onClick={() => setOpenExporting(!openExporting)}>
              <div className="inner">
                <FaFileExport /> <span>Export</span>{" "}
                <BiSolidRightArrow
                  className="arrow
                "
                />
              </div>
            </li>

            <div
              className={`exporting ${openExporting ? `active` : `inactive`}`}
            >
              <li>
                <div
                  className="inner"
                  onClick={() => exportComponentAsPNG(chartref, "custom-chart-filename")}
                >
                  <BiSolidFilePng /> <span>PNG</span>
                </div>
              </li>
              <li>
                <div className="inner">
                  <BsFilePdfFill /> <span>PDF</span>
                </div>
              </li>
              <li>
                <div className="inner">
                  <MdEmail /> <span>Email</span>
                </div>
              </li>
              <li>
                <div className="inner">
                  <MdInsights /> <span>Insignts</span>
                </div>
              </li>
            </div>

            <li onClick={() => setOpenHistory(!openHistory)}>
              <div className="inner">
                <RiChatHistoryFill /> <span>History</span>
                <span>
                  <BiSolidRightArrow
                    className={`arrow ${openHistory ? `activate` : `inactive`}`}
                  />
                </span>
              </div>
            </li>

            <div
              className={`history-menue ${
                openHistory ? `activate` : "inactive"
              }`}
            >
              {getTotalDays.map((element, index) => (
                <span key={index} className="history-item">
                  <div onClick={() => setIndex(index)}>
                    {element}:{getTotalTimes[index]}
                  </div>
                </span>
              ))}
            </div>
          </ul>
        </div>
        <div className="mtmmaincontainer__wrappermain">
          <h1>Earning before interest and Taxes</h1>
          <p>
            Mont to Month | YTD - Created in {getTotalDays[index]} at{" "}
            {getTotalTimes[index]}
          </p>
          {pending ? (
            <SignInUpLoader middleCircleColor={"#2A3342"} />
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <div className="chartcontainer" ref={chartref} >
                <LineChart
                  width={800}
                  height={500}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="EBIT_ACTUAL"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                    strokeWidth={4}
                  />
                  <Line
                    type="monotone"
                    dataKey="EBIT_TARGET"
                    stroke="#82ca9d"
                    activeDot={{ r: 8 }}
                    strokeWidth={4}
                  />
                </LineChart>
              </div>
            </ResponsiveContainer>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MtoMDahsboard;
