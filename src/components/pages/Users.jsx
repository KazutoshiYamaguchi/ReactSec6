import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: `kazu${val}`,
    name: "Kazu",
    image: "https://source.unsplash.com/pOUA8Xay514",
    email: "hanage@oppai.com",
    tel: "123456",
    company: {
      name: "AsaminoOppai.inc"
    },
    website: "http://oppaimomitai/asami"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <SUserArea>
        <h2>Users</h2>
        <SearchInput />
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
