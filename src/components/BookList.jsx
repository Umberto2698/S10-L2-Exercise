import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import SingleBook from "./SingleBook";

const BookList = (props) => {
  const [title, setTitle] = useState("");
  const [searchedBook, setSearchedBook] = useState([]);
  const [generes, setGeneres] = useState("all");
  const library = fantasy.concat(history.concat(horror).concat(romance).concat(scifi));

  useEffect(() => {
    if (generes !== "all" && title !== "") {
      setSearchedBook(
        library.filter(
          (book) => book.category === generes && book.title.toUpperCase().includes(title.toLocaleUpperCase())
        )
      );
      if (searchedBook.some((book) => book.asin === props.selectedBook)) {
        props.setCommentsDisplay(true);
      } else {
        props.setCommentsDisplay(false);
      }
    } else if (generes === "all" && title !== "") {
      setSearchedBook(library.filter((book) => book.title.toUpperCase().includes(title.toLocaleUpperCase())));
      if (searchedBook.some((book) => book.asin === props.selectedBook)) {
        props.setCommentsDisplay(true);
      } else {
        props.setCommentsDisplay(false);
      }
    } else if (generes !== "all" && title === "") {
      setSearchedBook(library.filter((book) => book.category === generes));
    } else {
      setSearchedBook(library);
    }
  }, [generes]);

  useEffect(() => {
    if (searchedBook.some((book) => book.asin === props.selectedBook)) {
      props.setCommentsDisplay(true);
    } else {
      props.setCommentsDisplay(false);
    }
  }, [searchedBook]);

  const filterBookList = (e, selectedGeneres) => {
    e.preventDefault();
    if (title === "" && selectedGeneres === "all") {
      setSearchedBook(library);
    } else if (selectedGeneres === "all") {
      setSearchedBook(library.filter((book) => book.title.toUpperCase().includes(title.toUpperCase())));
      if (searchedBook.some((book) => book.asin === props.selectedBook)) {
        props.setCommentsDisplay(true);
      } else {
        props.setCommentsDisplay(false);
      }
    } else {
      setSearchedBook(
        library.filter((book) => {
          return book.title.toUpperCase().includes(title.toUpperCase()) && book.category === selectedGeneres;
        })
      );
      if (searchedBook.some((book) => book.asin === props.selectedBook)) {
        props.setCommentsDisplay(true);
      } else {
        props.setCommentsDisplay(false);
      }
    }
  };

  return (
    <main className="h-100">
      <div className="container">
        <div className="mb-5 px-4">
          <Form
            onSubmit={(e) => {
              filterBookList(e, generes);
            }}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="d-inline-block mx-3">
              <Form.Group className="mx-2 d-inline-block" controlId="formBasicEmail">
                <Form.Label>Book title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Insert a book title"
                  onChange={(input) => {
                    setTitle(input.target.value);
                  }}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
            <Form.Group className="mx-3 d-inline-block">
              <Form.Label>Generes</Form.Label>
              <Form.Select
                onChange={(e) => {
                  setGeneres(e.target.value);
                  setTitle(e.target.form[0].value);
                }}
              >
                <option value="all">All</option>
                <option value="fantasy">Fantasy</option>
                <option value="history">History</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="scifi">Scifi</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </div>
        <div className="row d-flex align-items-center justify-content-between">
          {searchedBook.map((book, index) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-2" key={index}>
              <SingleBook
                book={book}
                setSelectBookId={props.setSelectBookId}
                selectedBook={props.selectedBook}
                setCommentsDisplay={props.setCommentsDisplay}
              ></SingleBook>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BookList;
