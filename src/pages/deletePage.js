import styled from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";

const Container = styled.div`
  background-color: white;
  border: 1px solid black;
  width: 390px;
  height: 844px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contents = styled.div`
  width: 390px;
  height: 664px;
  background-color: white;
  overflow: scroll;
  text-align: center;
  font-size: 32px;

  #complete_list {
    width: 290px;
    height: 440px;
    background-color: #f5f5f5;
    margin: 0 auto;
  }
`;

const DeletePage = () => {
  return (
    <>
      <Container>
        <Header></Header>
        <Contents>
          <p>삭제된 항목</p>
          <div id="complete_list"></div>
        </Contents>
        <Footer></Footer>
      </Container>
    </>
  );
};

export default DeletePage;
