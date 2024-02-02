import { axiosRequest } from "./ApiHelper";
export const priceApi = async (path) => await axiosRequest("GET", `${path}`);
