// enum env {
//   NODE_ENV = process.env.NODE_ENV,
//   API_URL = process.env.API_URL,
//   APP_URL = process.env.APP_URL,
// }

const getEnvKey = (envKey: string = ""): string => {
  console.log("process", import.meta.env[envKey]);

  if (!envKey) {
    console.error("Key required");
  }
  if (!import.meta.env[envKey]) {
    console.error("No key finded");
  }

  return import.meta.env[envKey];
};

const IS_DEVELOPMENT: boolean = getEnvKey("MODE") === "development";
const AUTH_STORAGE_KEY: string = "token";

export { getEnvKey, IS_DEVELOPMENT, AUTH_STORAGE_KEY };
