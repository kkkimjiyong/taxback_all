import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SurveyMain from "../Pages/Transfer/Index";
import { TransferSurvey } from "../Pages/Transfer/Survey/Index";
import { AssignStart } from "../Pages/Transfer/Survey/Start";
import { SurveyVerify } from "../Pages/Transfer/Verify/Index";
import { TransferDone } from "../Pages/Transfer/Survey/Done";
import { TransferSurveyResult } from "../Pages/Transfer/Survey/Result";
import { HomeTaxResult } from "../Pages/Transfer/Verify/Result";
import { VerifyDone } from "../Pages/Transfer/Verify/Done";
import { SignUp } from "../Pages/SignUp";
import { Main } from "../Pages/Main";
import { SignUpDone } from "../Pages/SignUpDone";
import { Login } from "../Pages/Login";
import { BetaResult } from "../Pages/Transfer/Survey/Sheet";
import { KaKaoSignUp } from "../Pages/KaKao/KaKaoSignup";
import { KaKaoCallback } from "../Pages/KaKao/KaKaoCallback";
import { Loading } from "../Pages/Loading";
import { TransferSurveyEdit } from "../Pages/Transfer/Survey/Edit";
import { InfoMain } from "../Pages/Index";
import SelectType from "../Pages/SelectType";
import { About } from "../Pages/About/Index";
import { Apply } from "../Pages/About/Apply/Index";
import { Counsel } from "../Pages/About/Counsel/Index";
import { CounselRequest } from "../Pages/About/Counsel/CounselRequest";
import { EditProfile } from "../Pages/About/Edit/Index";
import { Detail } from "../Pages/About/Apply/[id]";
import { Password } from "../Pages/About/Edit/Password";
import { PhoneNumber } from "../Pages/About/Edit/PhoneNumber";
import { Business } from "../Pages/Business";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InfoMain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup/done" element={<SignUpDone />} />
        <Route path="/business" element={<Business />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/edit" element={<EditProfile />} />
        <Route path="/about/edit/password" element={<Password />} />
        <Route path="/about/edit/phonenumber" element={<PhoneNumber />} />
        <Route path="/about/edit/phonenumber" element={<EditProfile />} />
        <Route path="/about/apply" element={<Apply />} />
        <Route path="/about/apply/:id" element={<Detail />} />
        <Route path="/about/counsel" element={<Counsel />} />
        <Route path="/about/counsel/request" element={<CounselRequest />} />
        <Route path="/select" element={<SelectType />} />
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
