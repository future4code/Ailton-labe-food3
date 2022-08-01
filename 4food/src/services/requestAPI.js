import axios from "axios";
import { BASE_URL } from "../constants/url";

export const requestData = async (type, path, body, token, setData) => {
  try {
    let res;
    if (!body)
      res = await axios[type](`${BASE_URL}${path}`, {
        headers: { auth: token },
      });
    else
      res = await axios[type](`${BASE_URL}${path}`, body, {
        headers: { auth: token },
      });
    setData(res.data);
  } catch (error) {
    console.log(error);
    // if (setErro) {
    //   setErro(error.response);
    //   if (navigate && error.response.status === 401 && token) {
    //     localStorage.setItem("token", "");
    //     goToPage(navigate, "");
    //   }
    // }
  }
};
