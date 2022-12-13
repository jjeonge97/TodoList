import React from "react";
import ToDoListItem from "./toDoListItem";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const ToDoList = ({ todos, onRemove, onClickCheck }) => {
  return (
    <Ul className="TodoList">
      {todos.map((todo) => (
        <ToDoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onClickCheck={onClickCheck}
        />
      ))}
    </Ul>
  );
};
export default ToDoList;
