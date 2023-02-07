import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_LOCAL,
  // baseURL: process.env.REACT_APP_PRAC,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

const noAuthInstance = axios.create({
  baseURL: process.env.REACT_APP_LOCAL,
  // baseURL: process.env.REACT_APP_PRAC,
});

export const userApi = {
  postSignUp: (userInfo: any) => noAuthInstance.post("/user/signup", userInfo),
  postLogin: (userInfo: any) => noAuthInstance.post("/user/login", userInfo),
  getUser: () => instance.get("/user"),
};
