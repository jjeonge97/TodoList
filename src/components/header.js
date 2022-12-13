import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const StyledHeader = styled.div`
  width: 390px;
  height: 90px;
  background-color: #fbe1e1;
  display: flex;
  align-items: center;
  line-height: 90px;
  justify-content: flex-start;

  /* h1 {
    font-size: 32px;
    padding: 0 0 0 15px;
    text-decoration: none;
  } */
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 0 0 0 15px;
  font-weight: 100;
  p {
    font-size: 32px;
    font-weight: 500;
  }
`;

// title onClick 하면 Home 화면으로 이동
const Header = () => {
  return (
    <StyledHeader>
      <StyledLink to="/home">
        <p className="title">Happiness</p>
      </StyledLink>
    </StyledHeader>
  );
};
export default Header;
