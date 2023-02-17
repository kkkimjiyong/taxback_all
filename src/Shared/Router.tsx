import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SurveyMain from "../Pages/SurveyMain";
import { TransferSurvey } from "../Pages/Survey/Index";
import { AssignStart } from "../Pages/Survey/Start";
import { SurveyVerify } from "../Pages/Verify/Index";
import { TransferDone } from "../Pages/Survey/Done";
import { TransferSurveyResult } from "../Pages/Survey/Result";
import { HomeTaxResult } from "../Pages/Verify/Result";
import { VerifyDone } from "../Pages/Verify/Done";
import { SignUp } from "../Pages/SignUp";
import { Main } from "../Pages/Main";
import { SignUpDone } from "../Pages/SignUpDone";
import { Login } from "../Pages/Login";
import { BetaResult } from "../Pages/Survey/Sheet";
import { KaKaoSignUp } from "../Pages/KaKao/KaKaoSignup";
import { KaKaoCallback } from "../Pages/KaKao/KaKaoCallback";
import { Loading } from "../Pages/Loading";
import { TransferSurveyEdit } from "../Pages/Survey/Edit";
import { InfoMain } from "../Pages/InfoMain";
import SelectType from "../Pages/SelectType";
import { About } from "../Pages/About/Index";
import { Apply } from "../Pages/About/Apply";
import { Counsel } from "../Pages/About/Counsel/Index";
import { CounselRequest } from "../Pages/About/Counsel/CounselRequest";
import { EditProfile } from "../Pages/About/EditProfile";

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
        <Route path="/" element={<SelectType />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/editprofile" element={<EditProfile />} />
        <Route path="/about/apply" element={<Apply />} />
        <Route path="/about/counsel" element={<Counsel />} />
        <Route path="/about/counsel/request" element={<CounselRequest />} />
        <Route path="/infomain" element={<InfoMain />} />
        <Route path="/transfer" element={<SurveyMain />} />
        <Route path="/transfer/verify/done" element={<VerifyDone />} />
        <Route path="/transfer/verify/result" element={<HomeTaxResult />} />
        <Route path="/transfer/verify" element={<SurveyVerify />} />
        <Route path="/transfer/survey" element={<TransferSurvey />} />
        <Route path="/transfer/survey/start" element={<AssignStart />} />
        <Route path="/transfer/survey/sheet" element={<BetaResult />} />
        <Route
          path="/transfer/survey/edit/:index/:type"
          element={<TransferSurveyEdit />}
        />
        <Route
          path="/transfer/survey/result"
          element={<TransferSurveyResult />}
        />
        <Route path="/transfer/survey/done" element={<TransferDone />} />
        {/* <Route path='*' element={<NotFound/>} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
