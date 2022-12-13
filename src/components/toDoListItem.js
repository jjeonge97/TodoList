import React from "react";
import { Link } from "react-router-dom";
import { BiTrash } from "react-icons/bi";
import { BiPencil } from "react-icons/bi";
import styled from "styled-components";
// 빈 체크박스
import { CiStop1 } from "react-icons/ci";
// 체크된 체크박스
import { CiSquareCheck } from "react-icons/ci";
import cn from "classnames";

const Li = styled.li`
  width: 340px;
  height: 60px;
  margin: 10px auto 0 auto;
  padding: 0 10px 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  background-color: #f5bdbd;
  font-size: 20px;

  .checkbox {
    cursor: pointer;
    display: flex;
    gap: 10px;
    align-items: center;

    svg {
      font-size: 1.3rem;
    }

    &.checked {
      svg {
        color: black;
      }

      .text {
        text-decoration: line-through;
      }
    }
  }

  button {
    background-color: #f5bdbd;
    border: none;
    width: 30px;
    height: 30px;

    svg {
      font-size: 1.3rem;
    }
  }
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: flex;
`;

const ToDoListItem = ({ todo, onRemove, onClickCheck }) => {
  const { id, title, checked } = todo;
  return (
    <Li className="ToDoListItem">
      <div
        className={cn("checkbox", { checked })}
        onClick={() => onClickCheck(id)}
      >
        {checked ? <CiSquareCheck /> : <CiStop1 />}
        <div className="text">{title}</div>
      </div>
      <div className="icon">
        <button>
          <StyledLink to="/edit">
            <BiPencil />
          </StyledLink>
        </button>
        <button onClick={() => onRemove(id)}>
          <BiTrash />
          {/* <button onClick={deleteTodo(id)}>x</button> */}
        </button>
      </div>
    </Li>
  );
};

export default ToDoListItem;
