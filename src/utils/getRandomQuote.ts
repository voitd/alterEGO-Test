import axios from "axios";
import { getEnvKey } from "./getEnvKey";

export interface Quote {
  quote: string;
  author: string;
  category: string;
}

export default async () => {
  const { data } = await axios({
    method: "get",
    url: "https://api.api-ninjas.com/v1/quotes?category=computers",
    headers: {
      "X-Api-Key": getEnvKey("VITE_RANDOM_IMG_API_KEY"),
    },
  });
  return data[0];
};
