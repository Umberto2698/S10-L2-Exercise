const SingleComment = (props) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <p>{props.display.comment}</p>
      <p>{props.display.rate}</p>
      <button
        className="btn btn-danger"
        onClick={async () => {
          const deletedObj = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.display._id, {
            method: "DELETE",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTZlY2MwMzRmZjAwMTQwM2Y0ZTgiLCJpYXQiOjE2OTQwOTE4OTgsImV4cCI6MTY5NTMwMTQ5OH0.BGAZfBp-IPyouU0rxraaD0PcWzU7lubsISdRUrZtx_g",
            },
          });
          const deleted = await deletedObj.json();
          props.setCommentList([...props.commentsList.filter((comment) => comment._id !== deleted._id)]);
        }}
      >
        {" "}
        Delete
      </button>
    </div>
  );
};

export default SingleComment;
