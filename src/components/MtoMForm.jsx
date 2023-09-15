import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDataActual, addDataTarget, resetError } from "../redux/mtmSlice";
import { useNavigate } from "react-router-dom";
import postMtMApiCall from "../services/postMtMApiCall";

function MtoMForm({ validate, setValidate }) {
  const [emptyInput, setEmptyInput] = useState(false);
  const [wrongInput, setWrongInput] = useState(false);
  const [nextButton, setNextButton] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mtmactual = useSelector((state) => state.mtm.mtmdataActual);
  const mtmtarget = useSelector((state) => state.mtm.mtmdataTarget);
  const mtmterror = useSelector((state) => state.mtm.error);


  const actualArray = [];
  const targetArray = [];

  const janActual = useRef(null);
  const janTarget = useRef(null);

  const febActual = useRef(null);
  const febTarget = useRef(null);

  const marActual = useRef(null);
  const marTarget = useRef(null);

  const aprActual = useRef(null);
  const aprTarget = useRef(null);

  const mayActual = useRef(null);
  const mayTarget = useRef(null);

  const junActual = useRef(null);
  const junTarget = useRef(null);

  const julActual = useRef(null);
  const julTarget = useRef(null);

  const augActual = useRef(null);
  const augTarget = useRef(null);

  const sepActual = useRef(null);
  const sepTarget = useRef(null);

  const octActual = useRef(null);
  const octTarget = useRef(null);

  const novActual = useRef(null);
  const novTarget = useRef(null);

  const decActual = useRef(null);
  const decTarget = useRef(null);

  useEffect(() => {
    if (mtmterror) {
      localStorage.removeItem("accesstoken");
      localStorage.removeItem("refreshtoken");
      localStorage.removeItem("email");
      dispatch(resetError())
      navigate("/");
    }
  }, [mtmterror]);

  useEffect(() => {
    if (validate) {
      setValidate(false);
      handelval();
    }
  }, [validate]);

  const handelBack = (e) => {
    e.preventDefault();
    window.history.back();
  };

  const validateInputActual = (inputValue) => {
    if (inputValue.current.value.trim() === "") {
      setEmptyInput(true);
      setWrongInput(false);
      inputValue.current.value = null;
    } else if (!isNaN(inputValue.current.value) === false) {
      setEmptyInput(false);
      setWrongInput(true);
      inputValue.current.value = null;
    } else {
      actualArray.push(Number(inputValue.current.value));
    }
  };

  const validateInputTarget = (inputValue) => {
    if (inputValue.current.value.trim() === "") {
      setEmptyInput(true);
      setWrongInput(false);
      inputValue.current.value = null;
    } else if (!isNaN(inputValue.current.value) === false) {
      setEmptyInput(false);
      setWrongInput(true);
      inputValue.current.value = null;
    } else {
      targetArray.push(Number(inputValue.current.value));
    }
  };

  const handelval = () => {
    setEmptyInput(false);
    setWrongInput(false);

    validateInputActual(janActual);
    validateInputTarget(janTarget);

    validateInputActual(febActual);
    validateInputTarget(febTarget);

    validateInputActual(marActual);
    validateInputTarget(marTarget);

    validateInputActual(aprActual);
    validateInputTarget(aprTarget);

    validateInputActual(mayActual);
    validateInputTarget(mayTarget);

    validateInputActual(junActual);
    validateInputTarget(junTarget);

    validateInputActual(julActual);
    validateInputTarget(julTarget);

    validateInputActual(augActual);
    validateInputTarget(augTarget);

    validateInputActual(sepActual);
    validateInputTarget(sepTarget);

    validateInputActual(octActual);
    validateInputTarget(octTarget);

    validateInputActual(novActual);
    validateInputTarget(novTarget);

    validateInputActual(decActual);
    validateInputTarget(decTarget);

    if (actualArray.length === 12 && targetArray.length === 12) {
      setNextButton(true);
      dispatch(addDataActual(actualArray));
      dispatch(addDataTarget(targetArray));
    } else {
      setNextButton(false);
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (nextButton) {
      postMtMApiCall(dispatch,mtmactual, mtmtarget);
      navigate("/mtm")
    }
  };
  return (
    <form>
      <Table bordered hover>
        <thead>
          <tr>
            <th>MONTH</th>
            <th>EBIT ACTUAL</th>
            <th>EBIT TARGET</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jan</td>
            <td>
              <input
                type="text"
                ref={janActual}
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
            <td>
              <input
                type="text"
                ref={janTarget}
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
            <td>Feb</td>
            <td>
              <input
                type="text"
                ref={febActual}
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
            <td>
              <input
                type="text"
                ref={febTarget}
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
            <td>Mar</td>
            <td>
              <input
                type="text"
                ref={marActual}
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
            <td>
              <input
                type="text"
                ref={marTarget}
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
            <td>Apr</td>
            <td>
              <input
                type="text"
                ref={aprActual}
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
            <td>
              <input
                type="text"
                ref={aprTarget}
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
            <td>May</td>
            <td>
              <input
                type="text"
                ref={mayActual}
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
            <td>
              <input
                type="text"
                ref={mayTarget}
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
            <td>Jun</td>
            <td>
              <input
                type="text"
                ref={junActual}
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
            <td>
              <input
                type="text"
                ref={junTarget}
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
            <td>Jul</td>
            <td>
              <input
                type="text"
                ref={julActual}
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
            <td>
              <input
                type="text"
                ref={julTarget}
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
            <td>Aug</td>
            <td>
              <input
                type="text"
                ref={augActual}
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
            <td>
              <input
                type="text"
                ref={augTarget}
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
            <td>Sep</td>
            <td>
              <input
                type="text"
                ref={sepActual}
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
            <td>
              <input
                type="text"
                ref={sepTarget}
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
            <td>Oct</td>
            <td>
              <input
                type="text"
                ref={octActual}
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
            <td>
              <input
                type="text"
                ref={octTarget}
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
            <td>Nov</td>
            <td>
              <input
                type="text"
                ref={novActual}
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
            <td>
              <input
                type="text"
                ref={novTarget}
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
            <td>Dec</td>
            <td>
              <input
                type="text"
                ref={decActual}
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
            <td>
              <input
                type="text"
                ref={decTarget}
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
          className={nextButton ? "buttonnext" : "disablebutton"}
          type="submit"
          onClick={handelSubmit}
        >
          Next
        </button>
        <button className="buttonback" onClick={handelBack}>
          Back
        </button>
      </div>
    </form>
  );
}

export default MtoMForm;
