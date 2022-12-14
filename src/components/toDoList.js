import React from "react";
import ToDoListItem from "./toDoListItem";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const ToDoList = ({ todos }) => {
  return (
    <Ul className="TodoList">
      {todos.map((todo) => (
        <ToDoListItem todo={todo} key={todo.id} />
      ))}
    </Ul>
  );
};
export default ToDoList;
