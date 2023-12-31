import axios from "axios";
import {
  startFetching,
  startSuccess,
  startError,
} from "../redux/getProfitLossSlice";

const getProfitLossApiCall = async (dispatch) => {
  const totalValueArray = [];
  const totalCreatedDate_day = [];
  const totalCreatedDate_hour = [];
  const totalDemos = []
  // const url = "http://127.0.0.1:8000/api/dataentery/profitloss";
  const url =
    "https://engessa1985.pythonanywhere.com/api/dataentery/profitloss";
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
    },
  };

  try {
    dispatch(startFetching());
    const response = await axios.get(url, config);

    response.data.forEach((elemet) => {
      const values = Object.values(elemet);

      const demo = values.slice(11, 12)
      

      const raw_data = values.slice(1, 9);
      totalValueArray.push(raw_data);

      const createdDate_day = elemet.created_at.slice(0, 10);
      totalCreatedDate_day.push(createdDate_day);
      const createdDate_hour = elemet.created_at.slice(11, 19);
      totalCreatedDate_hour.push(createdDate_hour);
      totalDemos.push(demo[0])
    });

    setTimeout(
      () =>
        dispatch(
          startSuccess({
            totalValueArray,
            totalCreatedDate_day,
            totalCreatedDate_hour,
            totalDemos
          })
        ),
      1000
    );
  } catch (error) {
    console.log(error);
    dispatch(startError());
  }
};

export default getProfitLossApiCall;
