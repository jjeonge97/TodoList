import styled from "styled-components";

const StyledHeader = styled.div`
  width: 390px;
  height: 90px;
  background-color: #fbe1e1;
  display: flex;
  align-items: center;
  line-height: 90px;
  justify-content: flex-start;
  padding: 0 0 0 15px;
`;

const Title = styled.p`
  font-size: 32px;
`;

// title onClick 하면 Home 화면으로 이동
const Header = () => {
  return (
    <StyledHeader>
      <Title>Happiness</Title>
    </StyledHeader>
  );
};
export default Header;
