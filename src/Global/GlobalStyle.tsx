import { createGlobalStyle, keyframes } from "styled-components";
import { useEffect } from "react";

const GlobalStyle = createGlobalStyle`

body {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    overflow: overlay;

}
:root {
    //메인컬러
    --color-main: #4323A7;
    //서브컬러
    --color-sub:#8563f5;
    //짙은 서브컬러 (네이밍어케하지)
    --color-thickSub:#2F1E7C;
    //연한 서브컬러
    --color-lightSub :   #BFB9D9;
    //중간 서브컬러 (네이밍어케하지)
    --color-midSub : #7548FF;
    //레드컬러
    --color-red : #E11960;
    // Input 박스 배경색
    --color-inputBox : #faf9ff;
    // content 박스 배경색 
    --color-contentBox : #fcf4f0;
    //회색컬러
    --color-gray:#aeaeae;
    //클릭 시, 진한회색컬러
    --color-darkGray : #6b6b6b;
    //폰트사이즈 스몰
    --font-small:0.9rem;
    //폰트사이즈 기본
    --font-base:1.125rem;
    //폰트사이즈 중간
    --font-md:1.5rem;
    //폰트사이즈 최대
    --font-big:2rem;

}
div {
    margin:0px; 
    padding:0px;
}
span {
    /* color: #8563f5; */
&.main {
    color: #4323A7;
}
// dark 클래스 부여하면 더 짙은 텍스트
&.dark{
    /* margin-right:10px; */
    color: #2F1E7C;
}
&.mid {
    /* margin-right:10px; */
    color: #7548FF;
}
&.bold {
    font-weight: 600;
    margin-right:0px;
}
}

`;

export default GlobalStyle;
