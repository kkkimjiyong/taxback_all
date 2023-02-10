import { SetState } from "immer/dist/internal";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUserInfo } from "../Redux/Modules/SingupSlice";
import { Layout } from "../Global/Layout";
import { Loading } from "./Loading";

export const KaKaoCallback = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let params = new URL(window.location.href).searchParams;
  let code = params.get("code");
  const postKaKaoCode = async () => {
    try {
      const response = await axios.post("https://gdgd.shop/user/kakao", {
        code,
      });
      console.log(response.data);
      localStorage.setItem("accessToken", response.data.accessToken);

      if ("kakao" in response.data) {
        setTimeout(() => {
          navigate("/survey");
        }, 1200);
      } else {
        setTimeout(() => {
          navigate("/kakao/signup");
        }, 1200);
        dispatch(addUserInfo(response.data.userInfo));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    postKaKaoCode();
  });

  return <Loading />;
};
