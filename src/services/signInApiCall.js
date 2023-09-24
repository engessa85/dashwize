import axios from "axios";
import { startUpdate, startSuccess, startError } from "../redux/signinSlice";

const signInApiCall = async ({ email, password }, dispatch) => {
  const url = "https://engessa1985.pythonanywhere.com/api/token/";
  // const url = "http://127.0.0.1:8000/api/token/";
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });

  try {
    dispatch(startUpdate());
    const response = await axios.post(url, body, config);

    dispatch(startSuccess({ res: response.data, email: email }));
  } catch (error) {
    dispatch(startError(error));
  }
};

export default signInApiCall;
