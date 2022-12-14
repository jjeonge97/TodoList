import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";
import { useCallback, useRef, useState } from "react";
import ToDoList from "../components/toDoList";
import ToDoInput from "../components/toDoInput";
import { useSelector, useDispatch } from "react-redux";
import { addToDo, deleteTodo } from "../actions/actions";

const Container = styled.div`
  background-color: white;
  border: 1px solid black;
  width: 390px;
  height: 844px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 390px;
  height: 664px;
  background-color: white;
  overflow: scroll;
`;

const Home = () => {
  const todos = useSelector((state) => state);
  console.log(todos);

  //   const isMount = useRef(true);

  //   useEffect(() => {
  //     if (!isMount.current) {
  //       localStorage.setItem("todos", JSON.stringify(todos));
  //     }
  //   }, [todos]);

  //   useEffect(() => {
  //     const localTodos = localStorage.getItem("todos");
  //     if (localTodos) {
  //       setTodos(JSON.parse(localTodos));
  //     }
  //     isMount.current = false;
  //   }, []);

  return (
    <Container>
      <Header />
      <ToDoInput />
      <Content>
        <ToDoList todos={todos}></ToDoList>
      </Content>
      <Footer />
    </Container>
  );
};
export default Home;
