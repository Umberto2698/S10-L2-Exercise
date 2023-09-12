import SingleComment from "./SingleComment";

const CommentsList = (props) => {
  return (
    <>
      {props.commentsList.map((comment, index) => {
        return <SingleComment display={comment} key={index}></SingleComment>;
      })}
    </>
  );
};

export default CommentsList;
