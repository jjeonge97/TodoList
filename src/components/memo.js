import React from "react";
import styled from "styled-components";

const ToDoMemo = styled.input`
  width: 280px;
  height: 300px;
  border-radius: 15px;
  border: none;
  background-color: #f5f5f5;
  margin: 0 auto;
`;

const Memo = () => {
  return <ToDoMemo />;
};

export default Memo;
