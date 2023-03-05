import axios from "axios";
import { getEnvKey } from "./getEnvKey";

enum Roles {
  admin,
  user,
}

export default async () => {
  // const isAdmin: boolean = credentials?.login == Roles.admin;
  const { data } = await axios({
    method: "get",
    url: "https://api.api-ninjas.com/v1/randomuser",
    headers: {
      "X-Api-Key": getEnvKey("VITE_RANDOM_IMG_API_KEY"),
    },
  });
  const user = {
    ...data,
    token: "2342f2f1d131rf12",
    role: Roles.admin,
  };
  return user;
};
