import { ICredentials } from "../types/auth";

export default (credentials: ICredentials): Promise<string> => {
  console.log(credentials);

  const login: string = "admin";
  const pass: string = "12345";

  const isAdmin: boolean =
    credentials?.password == pass && credentials?.login == login;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isAdmin) {
        return reject("Імʼя користувача або пароль введено неправильно.");
      } else {
        return resolve("2342f2f1d131rf12");
      }
    }, 250);
  });
};
