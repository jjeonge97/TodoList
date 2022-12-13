import styled from "styled-components";
import ProfileImage from "./profile.jpeg";
import Home from "./Home";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: white;
  border: 1px solid black;
  width: 390px;
  height: 844px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .title {
    font-size: 40px;
  }

  .profile_img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-image: url(${ProfileImage});
    background-size: cover;
  }

  .greeting {
    font-size: 20px;
  }
`;

// 터치하면 Home 화면으로 넘어갈 수 있도록
const StartPage = () => {
  return (
    <Container>
      <h1 className="title">My To Do List</h1>

      <Link to="/home">
        <div className="profile_img" />
      </Link>

      <p className="greeting">Touch me if you want to start</p>
    </Container>
  );
};
export default StartPage;
