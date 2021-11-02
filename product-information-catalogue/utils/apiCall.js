import Axios from "axios";

export const API_RES_STATUS = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export async function APICall(type, url, data, headers = {}) {
  try {
    let res;
    type = type.toLowerCase();
    if (type === "post") {
      res = await Axios.post(url, data, { headers });
    } else if (type === "get") {
      res = await Axios.get(url, { headers });
    } else if (type === "patch") {
      res = await Axios.patch(url, data, { headers });
    }
    console.log("API Success ", "url : ", url, "res : ", res);
    return {
      status: API_RES_STATUS.SUCCESS,
      data: res.data,
      headers: res.headers,
    };
  } catch (error) {
    console.log("Error in", url, error);
    return {
      status: API_RES_STATUS.ERROR,
      data: error.response,
    };
  }
}
