import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  height: 98px;
`;
/* 모바일 상단 중간 DIV */
export const CenterCircle = styled.div`
  position: absolute;
  width: 164px;
  height: 31px;
  top: -2px;
  left: 106px;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 0 0 80px 80px;
  border: 2px solid black;
  border-top: 0 solid black;
  overflow: hidden;
`;
/* 시간, 배터리, WIFI, 데이터 수신량 표기 DIV */
export const MobileInfo = styled.div`
  width: 100%;
  height: 44px;
  border-radius: 50px 50px 0 0;
  overflow: hidden;
`;
/* 시간 */
export const MobileTime = styled.span`
  position: absolute;
  width: 54px;
  height: 20px;
  left: 27px;
  top: 17px;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.5px;
`;
/* 데이터 수신량, WIFI, 배터리 Wrapper */
export const InfoWrapper = styled.div`
  position: absolute;
  width: 66.66px;
  height: 11.34px;
  left: 297.67px;
  top: 21.33px;
`;
export const Infos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* 로고, 검색창 DIV */
export const LogoSearchBar = styled.div`
  position: relative;
  width: 100%;
  height: 54px;
  border-bottom: 1px solid #fd6106;
`;
/* 로고 */
export const LogoImg = styled.img`
  position: absolute;
  width: 20px;
  height: 24.83px;
  left: 27px;
  top: 15px;
`;
/* 로고명 */
export const LogoText = styled.span`
  position: absolute;
  top: 10px;
  left: 58px;
  font-weight: 400;
  font-size: 12px;
  line-height: 10.22px;
`;
export const Search = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;
`;
