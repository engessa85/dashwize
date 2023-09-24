import axios from "axios";
import { startError } from "../redux/profitLossSlice";

const profitLossApiCall = async (dispatch, ArrayValue) => {
  const url = "https://engessa1985.pythonanywhere.com/api/dataentery/profitloss";
  // const url = "http://127.0.0.1:8000/api/dataentery/profitloss";
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
    },
  };

  const body = {
    revenue: ArrayValue[0],
    const_of_goods_sold: ArrayValue[1],
    sales: ArrayValue[2],
    marketing: ArrayValue[3],
    general_and_admin: ArrayValue[4],
    other_income: ArrayValue[5],
    other_expenses: ArrayValue[6],
    interest_and_tax: ArrayValue[7],
    
  };

  try {
    const response = await axios.post(url, body, config);
  } catch (error) {
    dispatch(startError());
  }
};

export default profitLossApiCall;
