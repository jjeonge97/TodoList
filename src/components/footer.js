import styled from "styled-components";
import { TfiTrash } from "react-icons/tfi";
import { SlHome } from "react-icons/sl";
import { MdChecklist } from "react-icons/md";
import { MdOutlineAdd } from "react-icons/md";

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

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <SlHome className="icon"></SlHome>
        <MdOutlineAdd className="icon"></MdOutlineAdd>
        <MdChecklist className="icon"></MdChecklist>
        <TfiTrash className="icon"></TfiTrash>
      </StyledFooter>
    </>
  );
};
export default Footer;
