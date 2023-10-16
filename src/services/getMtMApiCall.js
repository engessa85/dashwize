import axios from "axios";
import { startFetching, startSuccess, startError } from "../redux/getmtmtSlice";

const getMtMApiCall = async (dispatch) => {
  const totalactualValueArray = [];
  const totaltargetValueArray = [];
  const totalCreatedDate_day = [];
  const totalCreatedDate_hour = [];
  const totalDemos = []
 
  const url = "https://engessa1985.pythonanywhere.com/api/dataentery/mtm";
  // const url = "http://127.0.0.1:8000/api/dataentery/mtm";
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

      const demo = values.slice(27, 28);
      

      const raw_data = values.slice(1, 25);
      const actualValueArray = raw_data.slice(0, 12);
      totalactualValueArray.push(actualValueArray.concat(demo));

      const targetValueArray = raw_data.slice(12, 25);
      totaltargetValueArray.push(targetValueArray.concat(demo));

      const createdDate_day = elemet.created_at.slice(0, 10);
      totalCreatedDate_day.push(createdDate_day);

      const createdDate_hour = elemet.created_at.slice(11, 19);
      totalCreatedDate_hour.push(createdDate_hour);

      totalDemos.push(demo[0])
    });



    dispatch(
      startSuccess({
        totalactualValueArray,
        totaltargetValueArray,
        totalCreatedDate_day,
        totalCreatedDate_hour,
        totalDemos
      })
    );
  } catch (error) {
    console.log(error);
    dispatch(startError());
  }
};

export default getMtMApiCall;
