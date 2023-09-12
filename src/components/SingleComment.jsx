const SingleComment = (prop) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <p>{prop.display.comment}</p>
      <p>{prop.display.rate}</p>
      <button
        className="btn btn-danger"
        onClick={() => {
          fetch("https://striveschool-api.herokuapp.com/api/comments/" + prop.display._id, {
            method: "DELETE",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NTZlY2MwMzRmZjAwMTQwM2Y0ZTgiLCJpYXQiOjE2OTQwOTE4OTgsImV4cCI6MTY5NTMwMTQ5OH0.BGAZfBp-IPyouU0rxraaD0PcWzU7lubsISdRUrZtx_g",
            },
          });
        }}
      >
        {" "}
        Delete
      </button>
    </div>
  );
};

export default SingleComment;
