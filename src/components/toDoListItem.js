import React, { useCallback, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { BiPencil } from "react-icons/bi";
import styled from "styled-components";
import { CiStop1 } from "react-icons/ci";
import { CiSquareCheck } from "react-icons/ci";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { deleteToDo, checkToDo, editToDo } from "../actions/actions";

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
    }
  }

  button {
    background-color: #f5bdbd;
    border: none;
    width: 30px;
    height: 30px;
    cursor: pointer;

    svg {
      font-size: 1.3rem;
    }
  }
`;

const NewTitle = styled.input`
  width: 100px;
`;

const Title = styled.div``;

const ToDoListItem = ({ todo }) => {
  const { id, title, checked } = todo;

  const [isEdit, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setNewTitle(e.target.value);
    console.log("todo :", todo);
    console.log("new title: ", newTitle);
    console.log("id :", id);
    if (e.code === "Enter") {
      dispatch(editToDo({ id, newTitle }));
      setIsEdit(false);
    }
  };

  const onClickEdit = () => {
    setIsEdit(true);
  };

  const onClickDelete = () => {
    dispatch(deleteToDo({ id }));
  };

  const onClickChecked = () => {
    console.log(id, checked);
    dispatch(checkToDo({ id, checked }));
  };

  return (
    <>
      <Li className="ToDoListItem">
        <div className={cn("checkbox", { checked })} onClick={onClickChecked}>
          {checked ? <CiSquareCheck /> : <CiStop1 />}
        </div>
        {isEdit ? (
          <NewTitle
            value={newTitle}
            type="text"
            onChange={onChange}
            onKeyUp={onChange}
          />
        ) : (
          <Title>{title}</Title>
        )}
        <div>
          <button onClick={onClickEdit}>
            <BiPencil />
          </button>
          <button onClick={onClickDelete}>
            <BiTrash />
          </button>
        </div>
      </Li>
    </>
  );
};

export default ToDoListItem;
