import React from "react";
import styled from "styled-components";

const ToDoTitle = styled.input`
  width: 280px;
  height: 80px;
  border-radius: 15px;
  border: none;
  background-color: #f5f5f5;
  margin: 0 auto;
`;

const Title = () => {
  return <ToDoTitle />;
};

export default Title;
