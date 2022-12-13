import styled from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";
import Modal from "../components/addModal";
import { useCallback, useState } from "react";
import React from "react";
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

const Contents = styled.form`
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

const AddPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");

  const onChangeTitle = useCallback((e) => {
    setTitleValue(e.target.value);
  }, []);
  const onChangeContent = useCallback((e) => {
    setContentValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      setTitleValue("");
      setContentValue("");
      e.preventDefault();
    },
    [titleValue]
  );

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Container>
        <Header />
        <Contents onSubmit={onSubmit}>
          <p className="title">할 일이 뭔가요?</p>
          <Title
            type="text"
            className="input_title"
            value={titleValue}
            onChange={onChangeTitle}
          />
          <p className="content">메모해주세요!</p>
          <Memo
            type="text"
            className="input_content"
            value={contentValue}
            onChange={onChangeContent}
          />
          <button type="submit" onClick={openModalHandler}>
            등록
          </button>
          {isOpen ? <Modal setIsOpen={setIsOpen} /> : null}
        </Contents>
        <Footer />
      </Container>
    </>
  );
};

export default AddPage;
