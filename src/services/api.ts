import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { getEnvKey } from "../utils/getEnvKey";

export const axiosApi = axios.create({
  baseURL: getEnvKey("VITE_API_URL"),
  headers: {
    "content-type": "application/json",
    accept: "application/json",
  },
});

const axiosBaseQuery = async (requestOpts: Object = {}) => {
  try {
    const result = await axiosApi(requestOpts);

    return { data: result.data };
  } catch (error: any) {
    console.error(error);
    return {
      error: {
        status: error.response?.status,
        data: error.response?.data,
      },
    };
  }
};

const api = createApi({
  reducerPath: "splitApi",
  baseQuery: axiosBaseQuery,
  tagTypes: ["Profile", "News"],
  endpoints: () => ({}),
});

export default api;
