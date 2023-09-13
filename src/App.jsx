import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Row, Col, Container } from "react-bootstrap";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import CommentArea from "./components/CommentArea";
import { useState } from "react";

const App = () => {
  const [selectedBookId, setSelectBookId] = useState("");
  const [commentsDisplay, setCommentsDisplay] = useState(true);

  return (
    <div className="App">
      <MyNav></MyNav>
      <Container>
        <Welcome></Welcome>
        <Row className="mt-4">
          <Col md={8}>
            <BookList
              setSelectBookId={setSelectBookId}
              selectedBook={selectedBookId}
              setCommentsDisplay={setCommentsDisplay}
            ></BookList>
          </Col>
          <Col md={4}>
            <CommentArea id={selectedBookId} commentsDisplay={commentsDisplay}></CommentArea>
          </Col>
        </Row>
      </Container>
      <MyFooter></MyFooter>
    </div>
  );
};

export default App;
