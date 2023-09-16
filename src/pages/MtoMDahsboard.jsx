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

import PieChartProfitLoss from "../components/PieChartProfitLoss";

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
import getProfitLossApiCall from "../services/getProfitLossApicCall";
import { useDispatch, useSelector } from "react-redux";
import SignInUpLoader from "../components/SignInUpLoader";
import { exportComponentAsPNG } from "react-component-export-image";
import {
  GROSS_PROFIT,
  OPEX,
  OPERATING_PROFIT,
  NET_PROFIT,
  GROSS_PROFIT_MARGIN,
  OPEX_RATION,
  OPERATING_PROFIT_MARGIN,
  NET_PROFIT_MARGIN,
} from "../calculation/ProfitLossCalculation";

function MtoMDahsboard() {
  const mtmactual = useSelector((state) => state.mtm.mtmdataActual);
  const mtmtarget = useSelector((state) => state.mtm.mtmdataTarget);
  const profitloss = useSelector((state) => state.profitloss.profitLossArray);

  const {
    getTotalActualvalue,
    getTotalTargetValue,
    getTotalDays,
    getTotalTimes,
    pending,
    error,
  } = useSelector((state) => state.getmtm);
  const {
    getProfitLosslvalue,
    getProfitTotalDays,
    getProfitTotalTimes,
    profitPending,
    profitError,
  } = useSelector((state) => state.getprofitloss);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openHistory, setOpenHistory] = useState(false);
  const [openExporting, setOpenExporting] = useState(false);
  const [index, setIndex] = useState(0);
  const chartref = useRef(null);

  let data;
  let revenue;
  let cost_of_good_sold;
  let sales;
  let marketing;
  let general_and_admin;
  let other_income;
  let other_expenses;
  let interest_and_tax;

  let GROSS_PROFIT_VALUE;
  let OPEX_VALUE;
  let OPERATING_PROFIT_VALUE;
  let NET_PROFIT_VALUE;
  let GROSS_PROFIT_MARGIN_VALUE;
  let OPEX_RATION_VALUE;
  let OPERATING_PROFIT_MARGIN_VALUE;
  let NET_PROFIT_MARGIN_VALUE;

  useEffect(() => {
    getMtMApiCall(dispatch);
    getProfitLossApiCall(dispatch);

    if (error === true || profitError === true) {
      localStorage.removeItem("accesstoken");
      localStorage.removeItem("refreshtoken");
      localStorage.removeItem("email");
      navigate("/");
    }
  }, []);

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

    revenue = profitloss[0];
    cost_of_good_sold = profitloss[1];
    sales = profitloss[2];
    marketing = profitloss[3];
    general_and_admin = profitloss[4];
    other_income = profitloss[5];
    other_expenses = profitloss[6];
    interest_and_tax = profitloss[7];
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

    revenue = getProfitLosslvalue[index][0];
    cost_of_good_sold = getProfitLosslvalue[index][1];
    sales = getProfitLosslvalue[index][2];
    marketing = getProfitLosslvalue[index][3];
    general_and_admin = getProfitLosslvalue[index][4];
    other_income = getProfitLosslvalue[index][5];
    other_expenses = getProfitLosslvalue[index][6];
    interest_and_tax = getProfitLosslvalue[index][7];
  }

  GROSS_PROFIT_VALUE = GROSS_PROFIT(revenue, cost_of_good_sold)
  OPEX_VALUE = OPEX(sales,marketing,general_and_admin,other_income,other_expenses)
  OPERATING_PROFIT_VALUE = OPERATING_PROFIT(GROSS_PROFIT_VALUE, OPEX_VALUE)
  NET_PROFIT_VALUE = NET_PROFIT(OPERATING_PROFIT_VALUE,interest_and_tax)

  GROSS_PROFIT_MARGIN_VALUE = GROSS_PROFIT_MARGIN(GROSS_PROFIT_VALUE,revenue)
  OPEX_RATION_VALUE = OPEX_RATION(OPEX_VALUE, revenue)
  OPERATING_PROFIT_MARGIN_VALUE = OPERATING_PROFIT_MARGIN(OPERATING_PROFIT_VALUE, revenue)
  NET_PROFIT_MARGIN_VALUE = NET_PROFIT_MARGIN(NET_PROFIT_VALUE, revenue)

  console.log(GROSS_PROFIT_MARGIN_VALUE);
  

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
                  onClick={() =>
                    exportComponentAsPNG(chartref, "custom-chart-filename")
                  }
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
          <div className="top">
            <div className="top-wrapper">
              <PieChartProfitLoss percentage = {GROSS_PROFIT_MARGIN_VALUE} />
              <div className="precentage">{`${GROSS_PROFIT_MARGIN_VALUE}%`}</div>
              <div className="precentage-text">GROSS PROFIT MARGIN</div>
            </div>
            <div className="top-wrapper">
              <PieChartProfitLoss percentage={OPEX_RATION_VALUE} />
              <div className="precentage">{`${OPEX_RATION_VALUE}%`}</div>
              <div className="precentage-text">OPEX RATION</div>
            </div>
            <div className="top-wrapper">
              <PieChartProfitLoss percentage={OPERATING_PROFIT_MARGIN_VALUE}/>
              <div className="precentage">{`${OPERATING_PROFIT_MARGIN_VALUE}%`}</div>
              <div className="precentage-text">OPERATING PROFIT MARGIN</div>
            </div>
            <div className="top-wrapper">
              <PieChartProfitLoss percentage={NET_PROFIT_MARGIN_VALUE} />
              <div className="precentage">{`${NET_PROFIT_MARGIN_VALUE}%`}</div>
              <div className="precentage-text">NET PROFIT MARGIN</div>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-left">bottom left</div>
            <div className="bottom-right">bottom right</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MtoMDahsboard;

{
  /* <h1>Earning before interest and Taxes</h1>
                <p>
                  Mont to Month | YTD - Created in {getTotalDays[index]} at{" "}
                  {getTotalTimes[index]}
                </p>
                {pending ? (
                  <SignInUpLoader middleCircleColor={"#2A3342"} />
                ) : (
                  <ResponsiveContainer width="100%" height="100%">
                    <div className="chartcontainer" ref={chartref}>
                      <LineChart
                        width={300}
                        height={200}
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
                )} */
}
