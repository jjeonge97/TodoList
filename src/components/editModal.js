import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 150px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  background-color: #f5bdbd;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EditModal = ({ setIsOpen }) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Container onClick={closeModal}>
      <p>수정 완료!!</p>
    </Container>
  );
};

export default EditModal;
