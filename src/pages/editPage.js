import styled from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";
import EditModal from "../components/editModal";
import { useState } from "react";
import Title from "../components/title";
import Memo from "../components/memo";

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
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 24px;

  button {
    width: 100px;
    height: 60px;
    border-radius: 50%;
    border: none;
    background-color: #fbe1e1;
    font-size: 20px;
    margin: 45px auto 0 auto;
  }
`;

const EditPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };

  return (
    <>
      <Container>
        <Header />
        <Contents>
          <p className="title">할 일이 뭔가요?</p>
          <Title type="text" className="input_title" />
          <p className="content">메모해주세요!</p>
          <Memo type="text" className="input_content" />
          <button onClick={openModalHandler}>수정</button>
          {isOpen ? <EditModal setIsOpen={setIsOpen} /> : null}
        </Contents>
        <Footer />
      </Container>
    </>
  );
};

export default EditPage;
