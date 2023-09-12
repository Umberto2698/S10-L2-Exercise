import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddComment = (props) => {
  const [form, setForm] = useState(null);

  const sendComment = async (e) => {
    e.preventDefault();
    const commentObj = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTZlY2MwMzRmZjAwMTQwM2Y0ZTgiLCJpYXQiOjE2OTQwOTE4OTgsImV4cCI6MTY5NTMwMTQ5OH0.BGAZfBp-IPyouU0rxraaD0PcWzU7lubsISdRUrZtx_g",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: form.comment,
        rate: form.rate,
        elementId: props.bookId,
      }),
    });
    const comment = await commentObj.json();
    props.setCommentList([...props.commentsList, comment]);
  };

  return (
    <Form onSubmit={sendComment}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Insert Comment"
          onChange={(event) => {
            setForm({ ...form, comment: event.target.value });
          }}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Rate</Form.Label>
        <Form.Select
          onChange={(event) => {
            setForm({ ...form, rate: event.target.value });
          }}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddComment;
