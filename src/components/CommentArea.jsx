import { useEffect, useState } from "react";

import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const CommentArea = (props) => {
  const [display, setDispaly] = useState(false);
  const [commentsList, setCommentList] = useState([]);

  const fetchComments = async () => {
    try {
      const data = await fetch("https://striveschool-api.herokuapp.com/api/books/" + props.id + "/comments", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTZlY2MwMzRmZjAwMTQwM2Y0ZTgiLCJpYXQiOjE2OTQwOTE4OTgsImV4cCI6MTY5NTMwMTQ5OH0.BGAZfBp-IPyouU0rxraaD0PcWzU7lubsISdRUrZtx_g",
        },
      });
      if (data.ok) {
        const comments = await data.json();
        setDispaly(true);
        setCommentList(comments);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (props.id) {
      fetchComments();
    }
  }, [props.id]);

  return (
    <>
      {display ? (
        commentsList.length === 0 ? (
          <div>
            <p> Currently there are no comments for this book, but you can add one!</p>
            <AddComment bookId={props.id}></AddComment>
          </div>
        ) : (
          <div>
            <CommentsList commentsList={commentsList} setCommentList={setCommentList}></CommentsList>
            <AddComment bookId={props.id} commentsList={commentsList} setCommentList={setCommentList}></AddComment>
          </div>
        )
      ) : (
        <p>Select a book to view its comments</p>
      )}
    </>
  );
};

export default CommentArea;
