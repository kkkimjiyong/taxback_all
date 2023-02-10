import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import SurveyMain from "../Pages/SurveyMain";
import { TransferSurvey } from "../Pages/TransferSurvey";
import { AssignStart } from "../Pages/AssignStart";
import { SurveyVerify } from "../Pages/SurveyVerify";
import { TransferDone } from "../Pages/TransferDone";
import { SecondarySurvey } from "../Pages/TransferSecondarySurvey";
import { TransferSurveyResult } from "../Pages/TransferSurveyResult";
import { HomeTaxResult } from "../Pages/HomeTaxResult";
import { VerifyDone } from "../Pages/VerifyDone";
import { SignUp } from "../Pages/SignUp";
import { Main } from "../Pages/Main";
import { SignUpDone } from "../Pages/SignUpDone";
import { Login } from "../Pages/Login";
import { BetaResult } from "../Pages/BetaResult";
import { KaKaoSignUp } from "../Pages/KaKaoSignup";
import { KaKaoCallback } from "../Pages/KaKaoCallback";
import { Loading } from "../Pages/Loading";
import { TransferSurveyEdit } from "../Pages/TransferSurveyEdit";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 회원가입부분 일단 생략하기로 결정 */}
        {/* <Route path="/" element={<Main />} />
        <Route path="/ss" element={<Loading />} />
        <Route path="/kakao/auth" element={<KaKaoCallback />} />
        <Route path="/kakao/signup" element={<KaKaoSignUp />} />
        <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/done" element={<SignUpDone />} /> */}
        <Route path="/survey/result/beta" element={<BetaResult />} />
        <Route path="/" element={<SurveyMain />} />
        <Route path="/verify/done" element={<VerifyDone />} />
        <Route path="/result" element={<HomeTaxResult />} />
        <Route path="/survey/start/assign/:type" element={<AssignStart />} />
        <Route path="/survey/verify/:type" element={<SurveyVerify />} />
        <Route path="/survey/transfer" element={<TransferSurvey />} />
        <Route
          path="/survey/transfer/:index/:type"
          element={<TransferSurveyEdit />}
        />
        {/* <Route
          path="/survey/transfer/second/:type"
          element={<SecondarySurvey />}
        /> */}
        <Route
          path="/survey/transfer/result"
          element={<TransferSurveyResult />}
        />
        <Route path="/survey/transfer/done" element={<TransferDone />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
