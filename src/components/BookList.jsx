import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import library from "../data/scifi.json";
import SingleBook from "./SingleBook";

const BookList = (props) => {
  const [title, setTitle] = useState(null);
  const [searchedBook, setSearchedBook] = useState(library);

  const filterBookList = (e) => {
    e.preventDefault();
    if (title === "") {
      setSearchedBook(library);
    } else {
      setSearchedBook(library.filter((book) => book.title.toUpperCase().includes(title.toUpperCase())));
    }
  };

  return (
    <main className="h-100">
      <div className="container">
        <div className="mb-5 px-4">
          <Form onSubmit={filterBookList}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Titolo libro</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il titolo di un libro"
                onChange={(input) => {
                  setTitle(input.target.value);
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className="row d-flex align-items-center justify-content-between">
          {searchedBook.map((book, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-2" key={index}>
              <SingleBook
                book={book}
                setSelectBookId={props.setSelectBookId}
                selectedBook={props.selectedBook}
              ></SingleBook>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BookList;
