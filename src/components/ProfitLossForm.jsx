import React, { useRef, useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import profitLossApiCall from "../services/postProfitLossApiCall";
import { useDispatch, useSelector } from "react-redux";
import { addDataValue, resetError } from "../redux/profitLossSlice";
import { useNavigate } from "react-router-dom";
import SignInUpLoader from "./SignInUpLoader";

function ProfitLossForm() {
  const [emptyInput, setEmptyInput] = useState(false);
  const [wrongInput, setWrongInput] = useState(false);
  const [nextButton, setNextButton] = useState(false);
  const [validate, setValidate] = useState(false);
  const [validok, setValidOk] = useState(false);
  const [validLoader, setValidLoader] = useState(false);

  const revenue = useRef(null);
  const const_of_goods_sold = useRef(null);
  const sales = useRef(null);
  const marketing = useRef(null);
  const general_and_admin = useRef(null);
  const other_income = useRef(null);
  const other_expenses = useRef(null);
  const interest_and_tax = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profitLossArray = useSelector(
    (state) => state.profitloss.profitLossArray
  );
  const profitlossError = useSelector((state) => state.profitloss.error);

  const ArrayValue = [];

  useEffect(() => {
    if (profitlossError) {
      localStorage.removeItem("accesstoken");
      localStorage.removeItem("refreshtoken");
      localStorage.removeItem("email");
      dispatch(resetError());
      navigate("/");
    }
  }, [profitlossError]);

  useEffect(() => {
    if (validate && !profitlossError) {
      profitLossApiCall(dispatch, profitLossArray);
      navigate("/mtm");
    }
  }, [validate]);

  const handelBack = (e) => {
    e.preventDefault();
    window.history.back();
  };

  const validateInput = (inputValue) => {
    if (inputValue.current.value.trim() === "") {
      setEmptyInput(true);
      setWrongInput(false);
      inputValue.current.value = null;
    } else if (!isNaN(inputValue.current.value) === false) {
      setEmptyInput(false);
      setWrongInput(true);
      inputValue.current.value = null;
    } else {
      ArrayValue.push(Number(inputValue.current.value));
    }
  };

  const handelval = () => {
    setEmptyInput(false);
    setWrongInput(false);

    validateInput(revenue);
    validateInput(const_of_goods_sold);
    validateInput(sales);
    validateInput(marketing);
    validateInput(general_and_admin);
    validateInput(other_income);
    validateInput(other_expenses);
    validateInput(interest_and_tax);

    if (ArrayValue.length === 8) {
      setNextButton(true);
      dispatch(addDataValue(ArrayValue));
      setValidate(true);
    } else {
      setNextButton(false);
      setValidate(false);
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setValidLoader(true);
    setTimeout(() => {
      setValidLoader(false);
      handelval();
    }, 2000);
    
  };


  const handelSkip = (e) => {
    e.preventDefault();
    if (!profitlossError) {
      profitLossApiCall(dispatch, profitLossArray);
      navigate("/mtm");
      
    }
  };

  return (
    <form>
      {validLoader && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: "10px",
          }}
        >
          <SignInUpLoader middleCircleColor={"#2A3342"} />
        </div>
      )}
      <Table bordered hover>
        <tbody>
          <tr>
            <td>REVENUE</td>
            <td>
              <input
                type="text"
                ref={revenue}
                placeholder={
                  emptyInput
                    ? "Input shouldn't be empty"
                    : wrongInput
                    ? "Input to be a number"
                    : null
                }
                style={{ color: wrongInput || emptyInput ? "red" : null }}
              />
            </td>
          </tr>

          <tr>
            <td>COST OF GOODS SOLD</td>
            <td>
              <input
                type="text"
                ref={const_of_goods_sold}
                placeholder={
                  emptyInput
                    ? "Input shouldn't be empty"
                    : wrongInput
                    ? "Input to be a number"
                    : null
                }
                style={{ color: wrongInput || emptyInput ? "red" : null }}
              />
            </td>
          </tr>

          <tr>
            <td>SALES</td>
            <td>
              <input
                type="text"
                ref={sales}
                placeholder={
                  emptyInput
                    ? "Input shouldn't be empty"
                    : wrongInput
                    ? "Input to be a number"
                    : null
                }
                style={{ color: wrongInput || emptyInput ? "red" : null }}
              />
            </td>
          </tr>

          <tr>
            <td>MARKETING</td>
            <td>
              <input
                type="text"
                ref={marketing}
                placeholder={
                  emptyInput
                    ? "Input shouldn't be empty"
                    : wrongInput
                    ? "Input to be a number"
                    : null
                }
                style={{ color: wrongInput || emptyInput ? "red" : null }}
              />
            </td>
          </tr>

          <tr>
            <td>GENERAL AND ADMIN</td>
            <td>
              <input
                type="text"
                ref={general_and_admin}
                placeholder={
                  emptyInput
                    ? "Input shouldn't be empty"
                    : wrongInput
                    ? "Input to be a number"
                    : null
                }
                style={{ color: wrongInput || emptyInput ? "red" : null }}
              />
            </td>
          </tr>

          <tr>
            <td>OTHER INCOME</td>
            <td>
              <input
                type="text"
                ref={other_income}
                placeholder={
                  emptyInput
                    ? "Input shouldn't be empty"
                    : wrongInput
                    ? "Input to be a number"
                    : null
                }
                style={{ color: wrongInput || emptyInput ? "red" : null }}
              />
            </td>
          </tr>

          <tr>
            <td>OTHER EXPENSES</td>
            <td>
              <input
                type="text"
                ref={other_expenses}
                placeholder={
                  emptyInput
                    ? "Input shouldn't be empty"
                    : wrongInput
                    ? "Input to be a number"
                    : null
                }
                style={{ color: wrongInput || emptyInput ? "red" : null }}
              />
            </td>
          </tr>

          <tr>
            <td>INTEREST AND TAX</td>
            <td>
              <input
                type="text"
                ref={interest_and_tax}
                placeholder={
                  emptyInput
                    ? "Input shouldn't be empty"
                    : wrongInput
                    ? "Input to be a number"
                    : null
                }
                style={{ color: wrongInput || emptyInput ? "red" : null }}
              />
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="buttonscontainer">
        <button
          className={true ? "buttonnext" : "disablebutton"}
          type="submit"
          onClick={handelSubmit}
        >
          Next
        </button>
        <button
          className={true ? "buttonskip" : "disablebutton"}
          type="submit"
          onClick={handelSkip}
        >
          Skip
        </button>
        <button className="buttonback" onClick={handelBack}>
          Back
        </button>
      </div>
    </form>
  );
}

export default ProfitLossForm;
