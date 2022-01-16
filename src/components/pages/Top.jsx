import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { UserContext } from "../../providers/UserProvider";
import { userState } from "../../store/userState";
import { SecondaryButton } from "../atoms/buttons/SecondaryButton";

export const Top = () => {
  const history = useHistory();
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    return history.push("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    return history.push("/users");
  };
  return (
    <SContainer>
      <h2>Top</h2>
      <br />
      <br />
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
