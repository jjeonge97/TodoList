export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CHECHK_TODO = "CHECK_TODO";

export const addToDo = ({ id, title }) => {
  console.log("id :", id);
  console.log("title :", title);

  return {
    type: ADD_TODO,
    id,
    title,
  };
};

export const deleteToDo = ({ id }) => {
  console.log("id :", id);

  return {
    type: DELETE_TODO,
    id,
  };
};

export const editToDo = ({ id, newTitle }) => {
  console.log("id :", id);
  console.log("new Title :", newTitle);

  return {
    type: EDIT_TODO,
    id,
    title: newTitle,
  };
};

export const checkToDo = ({ id, checked }) => {
  console.log("id :", id);
  console.log("checked :", checked);

  return {
    type: CHECHK_TODO,
    id,
    checked,
  };
};
