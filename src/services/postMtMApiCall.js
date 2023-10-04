import axios from "axios";
import { startError } from "../redux/mtmSlice";

const postMtMApiCall = async (dispatch, mtmactual,mtmtarget) => {
  // const url = "https://engessa1985.pythonanywhere.com/api/dataentery/mtm";
  const url = "http://127.0.0.1:8000/api/dataentery/mtm";
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
    },
  };

  const body = {
    ebitactual1: mtmactual[0],
    ebitactual2: mtmactual[1],
    ebitactual3: mtmactual[2],
    ebitactual4: mtmactual[3],
    ebitactual5: mtmactual[4],
    ebitactual6: mtmactual[5],
    ebitactual7: mtmactual[6],
    ebitactual8: mtmactual[7],
    ebitactual9: mtmactual[8],
    ebitactual10: mtmactual[9],
    ebitactual11: mtmactual[10],
    ebitactual12: mtmactual[11],

    ebittarget1: mtmtarget[0],
    ebittarget2: mtmtarget[1],
    ebittarget3: mtmtarget[2],
    ebittarget4: mtmtarget[3],
    ebittarget5: mtmtarget[4],
    ebittarget6: mtmtarget[5],
    ebittarget7: mtmtarget[6],
    ebittarget8: mtmtarget[7],
    ebittarget9: mtmtarget[8],
    ebittarget10: mtmtarget[9],
    ebittarget11: mtmtarget[10],
    ebittarget12: mtmtarget[11],
    demo:false
  };

  try {
    const response = await axios.post(url, body, config);
  } catch (error) {
    console.log(error);
    dispatch(startError());
    
  }
};

export default postMtMApiCall;
