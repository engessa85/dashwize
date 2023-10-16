import React from "react";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import { useState } from "react";
import SignInUpLoader from "../components/SignInUpLoader";
import { useLocation } from "react-router-dom";

const key = "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";

function Insights() {
  const [loader, setLoader] = useState(false);
  const [openAIData, setOpenAIData] = useState("");
  const location = useLocation();
  const handelFirstInsight = async () => {
    console.log("pressed");
    const gottenmtmdataActualValue =
      location.state && location.state.mtmdataActualValue;
    const gottenmtmdataTargetValue =
      location.state && location.state.mtmdataTargetValue;
    const gottengetProfitLosslvalue =
      location.state && location.state.profitloassValue;

    console.log(gottenmtmdataActualValue);
    console.log(gottenmtmdataTargetValue);
    console.log(gottengetProfitLosslvalue);

    const contentIs =
      "As my business and financial advisor, I would like you to provide me with a comprehensive analysis of my business data. Please present your insights in a clear and structured manner, organizing them by titles and points. Provide detailed information on all possible aspects related to my business, ensuring a precise and high-quality response." +
      "ebit actual values for one years: " +
      gottenmtmdataActualValue +
      " and ebit target values for one year: " +
      gottenmtmdataTargetValue + " add values (REVENUE, COST OF GOODS SOLD, SALES Expenses, MARKETING Expenses, GENERAL AND ADMIN Expenses, OTHER INCOME, OTHER EXPENSES, INTEREST AND TAX Expenses) are respectively as the following " + gottengetProfitLosslvalue;

    setOpenAIData("");
    const Apibody = {
      model: "gpt-4",
      messages: [{ role: "user", content: contentIs }],
      temperature: 0,
      max_tokens: 2048,
    };

    setLoader(true);

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify(Apibody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data.choices[0].message.content);
        setLoader(false);
        setOpenAIData(data.choices[0].message.content);
      });
  };
  return (
    <>
      <TopBar />
      <div className="insightscontainer">
        <div className="wrapper">
          <h1 className="title">Insights</h1>
          <div className="questions-container">
            <div className="question-item" onClick={handelFirstInsight}>
              <h1>General insights about latest selected data</h1>
              <p>
                insights about earning before interest, taxes and income
                statement
              </p>
            </div>
          </div>

          <div className="result">
            {loader ? <SignInUpLoader middleCircleColor={"#2A3342"} /> : null}
            {openAIData !== ""
              ? openAIData
                  .split("\n")
                  .map((part, index) => <p key={index} className="part">{part}</p>)
              : null}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Insights;
