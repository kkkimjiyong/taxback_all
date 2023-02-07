import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import { CarouselPrac } from "../Pages/CarouselPrac";
import { Login } from "../Pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/prac" element={<CarouselPrac />} />
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/survey" element={<SurveyMain />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/done" element={<SignUpDone />} />
        <Route path="/verify/done" element={<VerifyDone />} />
        <Route path="/result" element={<HomeTaxResult />} />
        <Route path="/survey/start/assign/:type" element={<AssignStart />} />
        <Route path="/survey/verify/:type" element={<SurveyVerify />} />
        <Route path="/survey/transfer" element={<TransferSurvey />} />
        <Route
          path="/survey/transfer/second/:type"
          element={<SecondarySurvey />}
        />
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
