import { Component } from "react";
import Card from "react-bootstrap/Card";
import library from "../data/scifi.json";

class AllTheBooks extends Component {
  render() {
    return (
      <main className="h-100">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-between">
            {library.map((book, index) => (
              <div className="col-sm-6 col-md-4 col-lg-3 mb-2" key={index}>
                <Card>
                  <Card.Img variant="top" src={book.img} style={{ height: 300 }} />
                  <Card.Body>
                    <Card.Title className="text-truncate">{book.title}</Card.Title>
                    <Card.Text>
                      Genere:{book.category} - Price:{book.price}$
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }
}

export default AllTheBooks;
