import axios from "axios";
import { startFetching, startSuccess, startError } from "../redux/getmtmtSlice";

const getMtMApiCall = async (dispatch) => {
  const totalactualValueArray = [];
  const totaltargetValueArray = [];
  const totalCreatedDate_day = [];
  const totalCreatedDate_hour = [];
  const url = "http://127.0.0.1:8000/api/dataentery/mtm";
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
      const raw_data = values.slice(1, 25);
      const actualValueArray = raw_data.slice(0, 12);
      totalactualValueArray.push(actualValueArray);

      const targetValueArray = raw_data.slice(12, 25);
      totaltargetValueArray.push(targetValueArray);

      const createdDate_day = elemet.created_at.slice(0, 10);
      totalCreatedDate_day.push(createdDate_day);
      const createdDate_hour = elemet.created_at.slice(11, 19);
      totalCreatedDate_hour.push(createdDate_hour);
    });

    setTimeout(
      () =>
        dispatch(
          startSuccess({
            totalactualValueArray,
            totaltargetValueArray,
            totalCreatedDate_day,
            totalCreatedDate_hour,
          })
        ),
      1000
    );
  } catch (error) {
    dispatch(startError());
    
  }
};

export default getMtMApiCall;
