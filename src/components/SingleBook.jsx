import Card from "react-bootstrap/Card";

const SingleBook = (props) => {
  return (
    <div className="object-contain mx-auto">
      <Card
        style={
          props.selectedBook === props.book.asin
            ? { border: "2px solid red" }
            : { border: "2px solid rgba(0 0 0/12.5%)" }
        }
      >
        <Card.Img
          onClick={() => {
            props.setSelectBookId(props.book.asin);
          }}
          variant="top"
          src={props.book.img}
          style={{ height: "300px" }}
        />
        <Card.Body>
          <Card.Title className="text-truncate">{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleBook;
