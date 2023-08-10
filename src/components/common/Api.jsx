import { axiosRequest } from "./ApiHelper";
export const LatestNewsHandler = async (path) =>
  await axiosRequest(
    "GET",
    `${path}`
    
  );