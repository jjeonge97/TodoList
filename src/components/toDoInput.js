import React, { useRef } from "react";
import { useState, useCallback } from "react";
import Modal from "../components/addModal";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../actions/actions";

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
    font-size: 20px;
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

const ToDoInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const todos = useSelector((state) => state);
  const nextId = useRef(todos.length);
  const dispatch = useDispatch();

  const onChangeTitle = useCallback((e) => setTitleValue(e.target.value), []);

  const onSubmit = useCallback(
    (e) => {
      console.log(titleValue);
      e.preventDefault();
      nextId.current++;
      dispatch(addToDo({ id: nextId.current, title: titleValue }));
      setTitleValue("");
    },
    [titleValue]
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
        <input type="text" onChange={onChangeTitle} value={titleValue}></input>
        <button type="submit" onClick={openModalHandler}>
          등록
        </button>
        {isOpen ? <Modal setIsOpen={setIsOpen} /> : null}
      </Form>
    </>
  );
};
export default ToDoInput;
