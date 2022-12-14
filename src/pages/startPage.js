import styled from "styled-components";
import ProfileImage from "./profile.jpeg";
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: #fbe1e1;
  width: 390px;
  height: 844px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h1 {
    font-size: 40px;
  }

  .profile_img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-image: url(${ProfileImage});
    background-size: cover;
  }

  p {
    font-size: 20px;
  }
`;

const StartPage = () => {
  return (
    <Container>
      <h1>My To Do List</h1>

      <Link to="/home">
        <div className="profile_img" />
      </Link>

      <p>Touch me if you want to start</p>
    </Container>
  );
};
export default StartPage;
