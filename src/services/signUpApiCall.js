import axios from "axios";
import { startUpdate, startSuccess, startError } from "../redux/signupSlice";
const signUpApiCall = async (
  { name, email, password, password2 },
  dispatch
) => {
  const url = "https://engessa1985.pythonanywhere.com/api/accounts/signup";
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, password, password2 });

  try {
    dispatch(startUpdate());
    const response = await axios.post(url, body, config);
    console.log("main", response.data);

    if ("error" in response.data) {
      dispatch(startError(response.data.error))
    } else {
      dispatch(startSuccess())
    }

    
  } catch (error) {
    console.log(error);
    dispatch(startError());
  }
};

export default signUpApiCall;
