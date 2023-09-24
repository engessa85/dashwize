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

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

function MtoMDahsboard() {
  const mtmactual = useSelector((state) => state.mtm.mtmdataActual);
  const mtmtarget = useSelector((state) => state.mtm.mtmdataTarget);
  const profitloss = useSelector((state) => state.profitloss.profitLossArray);
  const [loading, setLoading] = useState(true);

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
    async function fetch() {
      await getMtMApiCall(dispatch);
      await getProfitLossApiCall(dispatch);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }

    fetch();

    if (error === true || profitError === true) {
      localStorage.removeItem("accesstoken");
      localStorage.removeItem("refreshtoken");
      localStorage.removeItem("email");
      navigate("/");
    }
  }, []);

  if (loading === false) {
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

  GROSS_PROFIT_VALUE = GROSS_PROFIT(revenue, cost_of_good_sold);
  OPEX_VALUE = OPEX(
    sales,
    marketing,
    general_and_admin,
    other_income,
    other_expenses
  );
  OPERATING_PROFIT_VALUE = OPERATING_PROFIT(GROSS_PROFIT_VALUE, OPEX_VALUE);
  NET_PROFIT_VALUE = NET_PROFIT(OPERATING_PROFIT_VALUE, interest_and_tax);

  GROSS_PROFIT_MARGIN_VALUE = GROSS_PROFIT_MARGIN(GROSS_PROFIT_VALUE, revenue);
  OPEX_RATION_VALUE = OPEX_RATION(OPEX_VALUE, revenue);
  OPERATING_PROFIT_MARGIN_VALUE = OPERATING_PROFIT_MARGIN(
    OPERATING_PROFIT_VALUE,
    revenue
  );
  NET_PROFIT_MARGIN_VALUE = NET_PROFIT_MARGIN(NET_PROFIT_VALUE, revenue);

  const downloadFileName = "Report"

  const handelPDF = () => {
    const input = chartref.current;

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHight = pdf.internal.pageSize.getHeight()
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const ratio = Math.min(pdfWidth/imgWidth, pdfHight/imgHeight)
      const imgX = (pdfWidth-imgWidth*ratio)/2
      const imgY = 10
      pdf.addImage(imgData, "JPEG", imgX, imgY, imgWidth*ratio, imgHeight*ratio);
      pdf.save(`${downloadFileName}.pdf`);
    });
  };


  const handelEmail = ()=> {
    navigate("/email")

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

            <li>
              <div className="inner">
                <MdInsights /> <span>Insights</span>
              </div>
            </li>

            <li onClick={() => setOpenExporting(!openExporting)}>
              <div className="inner">
                <FaFileExport /> <span>Export</span>
                <span>
                  <BiSolidRightArrow
                    className={`arrow ${
                      openExporting ? `activate` : `inactive`
                    }`}
                  />
                </span>
              </div>
            </li>

            <div
              className={`export-menue ${
                openExporting ? `activate` : "inactive"
              }`}
            >
              <span className="export-item">
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
                  <div className="inner" onClick={handelPDF}>
                    <BsFilePdfFill /> <span>PDF</span>
                  </div>
                </li>

                <li>
                  <div className="inner" onClick={handelEmail}>
                    <MdEmail /> <span>Email</span>
                  </div>
                </li>
              </span>
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

        <div className="mtmmaincontainer__wrappermain" ref={chartref}>
          {loading ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "50px",
              }}
            >
              <SignInUpLoader middleCircleColor={"#2A3342"} />
            </div>
          ) : (
            <>
              <div className="top">
                <div className="top-wrapper">
                  <PieChartProfitLoss percentage={GROSS_PROFIT_MARGIN_VALUE} />
                  <div className="precentage">{`${GROSS_PROFIT_MARGIN_VALUE}%`}</div>
                  <div className="precentage-text">GROSS PROFIT MARGIN</div>
                </div>
                <div className="top-wrapper">
                  <PieChartProfitLoss percentage={OPEX_RATION_VALUE} />
                  <div className="precentage">{`${OPEX_RATION_VALUE}%`}</div>
                  <div className="precentage-text">OPEX RATION</div>
                </div>
                <div className="top-wrapper">
                  <PieChartProfitLoss
                    percentage={OPERATING_PROFIT_MARGIN_VALUE}
                  />
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
                <div className="bottom-left">
                  <h1>Earning before interest and Taxes</h1>
                  <p>
                    Mont to Month | YTD - Created in {getTotalDays[index]} at{" "}
                    {getTotalTimes[index]}
                  </p>

                  <ResponsiveContainer width="100%" height="100%">
                    <div className="chartcontainer">
                      <LineChart
                        width={800}
                        height={400}
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
                          stroke="#22C55E"
                          activeDot={{ r: 8 }}
                          strokeWidth={4}
                        />
                        <Line
                          type="monotone"
                          dataKey="EBIT_TARGET"
                          stroke="#2A3342"
                          activeDot={{ r: 8 }}
                          strokeWidth={4}
                        />
                      </LineChart>
                    </div>
                  </ResponsiveContainer>
                </div>
                <div className="bottom-right">
                  <h1>INCOME STATEMENT</h1>
                  <div className="porfit-row">
                    <p>Revenue</p>
                    <p>{revenue} $</p>
                  </div>
                  <div className="porfit-row">
                    <p>COGS</p>
                    <p>{cost_of_good_sold}$</p>
                  </div>
                  <span
                    style={{
                      background: "gray",
                      height: "0.8px",
                      display: "block",
                      marginBottom: "10px",
                    }}
                  ></span>
                  <div className="porfit-row">
                    <p style={{ fontWeight: "700", color: "black" }}>
                      GROSS PROFIT
                    </p>
                    <p style={{ fontWeight: "700", color: "black" }}>
                      {GROSS_PROFIT_VALUE}$
                    </p>
                  </div>
                  <div className="porfit-row">
                    <p style={{ fontWeight: "700", color: "black" }}>OPEX</p>
                    <p style={{ fontWeight: "700", color: "black" }}>
                      {OPEX_VALUE}$
                    </p>
                  </div>
                  <div className="porfit-row">
                    <p>Sales</p>
                    <p>{sales}$</p>
                  </div>
                  <div className="porfit-row">
                    <p>Marketing</p>
                    <p>{marketing}$</p>
                  </div>
                  <div className="porfit-row">
                    <p>General & Admin</p>
                    <p>{general_and_admin}$</p>
                  </div>
                  <div className="porfit-row">
                    <p>Othe Income</p>
                    <p>{other_income}$</p>
                  </div>
                  <div className="porfit-row">
                    <p>Othe Expenses</p>
                    <p>{other_expenses}$</p>
                  </div>
                  <span
                    style={{
                      background: "gray",
                      height: "0.8px",
                      display: "block",
                      marginBottom: "10px",
                    }}
                  ></span>
                  <div className="porfit-row">
                    <p style={{ fontWeight: "700", color: "black" }}>
                      OPERATING PROFIT (EBIT)
                    </p>
                    <p style={{ fontWeight: "700", color: "black" }}>
                      {OPERATING_PROFIT_VALUE}$
                    </p>
                  </div>
                  <div className="porfit-row">
                    <p>Interest and Tax</p>
                    <p>{interest_and_tax}$</p>
                  </div>
                  <br />
                  <div className="porfit-row">
                    <p style={{ fontWeight: "700", color: "black" }}>
                      NET PROFIT
                    </p>
                    <p style={{ fontWeight: "700", color: "black" }}>
                      {NET_PROFIT_VALUE}$
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MtoMDahsboard;
