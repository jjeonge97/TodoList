import styled from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";
import { useSelector } from "react-redux";

const Container = styled.div`
  background-color: white;
  border: 1px solid black;
  width: 390px;
  height: 844px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    padding: 0;
  }
`;

const Contents = styled.div`
  width: 390px;
  height: 664px;
  background-color: white;
  overflow: scroll;
  text-align: center;
  font-size: 32px;

  #complete_list {
    width: 290px;
    height: 440px;
    background-color: #f5f5f5;
    margin: 0 auto;
  }
`;

const Li = styled.li`
  width: 200px;
  height: 60px;
  margin: 0 auto;
  padding: 0 10px 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 15px;
  background-color: #f5bdbd;
  font-size: 20px;
`;

const CompletePage = () => {
  const todos = useSelector((state) => state);
  console.log(todos);

  return (
    <>
      <Container>
        <Header />
        <Contents>
          <p>완료한 항목</p>
          <div id="complete_list">
            <ul>
              {todos.map((todo) =>
                todo.checked === true ? <Li>{todo.title}</Li> : null
              )}
            </ul>
          </div>
        </Contents>
        <Footer />
      </Container>
    </>
  );
};

export default CompletePage;
