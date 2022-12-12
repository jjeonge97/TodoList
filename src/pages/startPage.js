import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  border: 1px solid black;
  width: 390px;
  height: 844px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Title = styled.h2`
  font-size: 40px;
`;

const Profile = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: black;
`;

const Greeting = styled.p`
  font-size: 20px;
`;
// 터치하면 Home 화면으로 넘어갈 수 있도록
const StartPage = () => {
  return (
    <Container>
      <Title>My ToDo List</Title>
      <Profile />
      <Greeting>Touch me if you want to start</Greeting>
    </Container>
  );
};
export default StartPage;
