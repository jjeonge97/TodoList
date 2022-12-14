import styled from "styled-components";
import React from "react";
import { SlHome } from "react-icons/sl";
import { MdChecklist } from "react-icons/md";
import { Link } from "react-router-dom";

const StyledFooter = styled.div`
  width: 390px;
  height: 90px;
  background-color: #fbe1e1;
  line-height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .icon {
    font-size: 32px;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <StyledLink to="/home">
          <SlHome className="icon home"></SlHome>
        </StyledLink>
        <StyledLink to="/complete">
          <MdChecklist className="icon complete"></MdChecklist>
        </StyledLink>
      </StyledFooter>
    </>
  );
};
export default Footer;
