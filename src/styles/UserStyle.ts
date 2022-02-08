import styled from "styled-components";

export const UserWrapper = styled.div`
  padding: 20px;
  font-size: 18px;
  font-weight: 600;
`;
export const UserInfos = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  span {
    margin-left: 10px;
  }
  &:not(:first-child) {
    margin-top: 20px;
  }
`;
export const UserProfile = styled.img`
  display: block;
  width: 48px;
  height: 48px;
`;
