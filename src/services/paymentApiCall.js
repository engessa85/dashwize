import axios from "axios";
import { startUpdate, startSuccess, startError } from "../redux/paymentSlice";

const paymentApiCall = async (dispatch) => {
  const url = "https://engessa1985.pythonanywhere.com/api/accounts/paymentinfo";
  // const url = "http://127.0.0.1:8000/api/accounts/paymentinfo";
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
    },
  };


  try {
    dispatch(startUpdate());
    
    const response = await axios.get(url, config);
    setTimeout(() => {
      dispatch(startSuccess(response.data));
    }, 2000);
    
  } catch (error) {
    dispatch(startError());
  }
};

export default paymentApiCall;
