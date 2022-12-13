import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";
import { useCallback, useRef, useState } from "react";
import ToDoList from "../components/toDoList";
import ToDoInput from "../components/toDoInput";

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
  const [todos, setTodos] = useState([
    { id: 1, title: "모닝 헬스", checked: false },
    {
      id: 2,
      title: "설이 산책시키기",
      checked: true,
    },
    {
      id: 3,
      title: "리액트 공부",
      checked: false,
    },
  ]);

  const onClickCheck = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  const nextId = useRef(4);
  const isMount = useRef(true);

  useEffect(() => {
    if (!isMount.current) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
    isMount.current = false;
  }, []);

  const onInsert = useCallback(
    (title) => {
      console.log(title);
      const todo = {
        id: nextId.current,
        title,
        checked: false,
      };
      setTodos(todos.concat(todo));
      console.log(todos);
      nextId.current++;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  return (
    <Container>
      <Header />
      <Content>
        <ToDoInput onInsert={onInsert} todos={todos} />
        <ToDoList
          todos={todos}
          onRemove={onRemove}
          onClickCheck={onClickCheck}
        ></ToDoList>
      </Content>
      <Footer />
    </Container>
  );
};
export default Home;
