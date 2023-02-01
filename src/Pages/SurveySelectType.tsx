import React from "react";
import { useParams } from "react-router-dom";
import { SelectBody } from "../Components/SurveySelectType/SelectBody";
import { Layout } from "../Global/Layout";

export const SelectSurveyType = () => {
  // 사업자세금이냐 양도세 및 종부세냐에 따라 달라짐
  const { kind } = useParams() as { kind: string };

  return (
    <Layout>
      <SelectBody kind={kind} />
    </Layout>
  );
};
