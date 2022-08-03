
import axios from "axios";
import Swal from "sweetalert2";
import { BASE_URL } from "../constants/url";

export const requestData = async (type, path, body, token, setData, setEdit) => {
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
    if (setEdit) {
      setEdit(true)
    }
    if (setData) {
      setData(res.data);
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${error.response.data.message}`,
      footer: `Código do erro ${error.response.status}`,
      confirmButtonColor: 'red'
    });
  }
};
