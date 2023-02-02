import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SurveyMain from "../Pages/SurveyMain";
import { TransferSurvey } from "../Pages/TransferSurvey";
import { AssignStart } from "../Pages/AssignStart";
import { SurveyVerify } from "../Pages/SurveyVerify";
import { TransferDone } from "../Pages/TransferDone";
import { SelectSurveyType } from "../Pages/SurveySelectType";
import { SecondarySurvey } from "../Pages/TransferSecondarySurvey";
import { TransferSurveyResult } from "../Pages/TransferSurveyResult";
import { SurveyMain2 } from "../Pages/SurveyMain2";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SurveyMain />} />
        <Route path="/2" element={<SurveyMain2 />} />
        <Route path="/survey/start/assign/:type" element={<AssignStart />} />
        <Route path="/survey/select/:kind" element={<SelectSurveyType />} />
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
