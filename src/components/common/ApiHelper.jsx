import Axios from "axios";
const SERVER_URL = "https://v1.nocodeapi.com";

export async function axiosRequest(method, url, data = null) {
  try {
    let response = await Axios({
      method: method,
      url: `${SERVER_URL}${url}`,
      data: data,
    });
    return await response.data;
  } catch (error) {
    return error;
  }
}
