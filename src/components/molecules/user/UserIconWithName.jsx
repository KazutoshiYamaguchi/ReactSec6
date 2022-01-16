import React, { memo, useContext } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";
import { userState } from "../../../store/userState";

export const UserIconWithName = memo((props) => {
  const { image, name } = props;
  //const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(userState);
  console.log(userInfo);

  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <SContainer>
      <SImage height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>edit</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImage = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0px;
  color: #20514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
