import React from "react";
import { useState, useCallback } from "react";
import Modal from "../components/addModal";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 5px;
  width: 340px;
  margin: 0 auto;

  input {
    width: 300px;
    height: 60px;
    border: 1px solid black;
    padding: 0;
  }

  button {
    height: 60px;
    width: 70px;
    background-color: #fbe1e1;
    padding: 0;
    border: none;
    border-radius: 20px;
    font-size: 15px;
  }
`;

const ToDoInput = ({ onInsert, todos }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [titleValue, setTitleValue] = useState("");

  const onChangeTitle = useCallback((e) => {
    setTitleValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(titleValue);

      setTitleValue("");
      e.preventDefault();
    },
    [onInsert, titleValue]
  );

  const openModalHandler = () => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <input type="text" value={titleValue} onChange={onChangeTitle}></input>
        <button type="submit" onClick={openModalHandler}>
          등록
        </button>
        {isOpen ? <Modal setIsOpen={setIsOpen} /> : null}
      </Form>
    </>
  );
};
export default ToDoInput;
