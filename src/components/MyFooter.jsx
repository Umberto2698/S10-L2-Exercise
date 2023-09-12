import Button from "react-bootstrap/Button";

const MyFooter = () => {
  return (
    <footer className="bg-dark bottom-0 start-0 end-0">
      <div className="container">
        <div className="row text-white justify-content-between mx-3 py-2">
          <div className="col-4 align-items-center justify-content-between flex-column text-start">
            <p>Policy</p>
            <p>About</p>
            <p>Terms</p>
            <p>Work with us</p>
          </div>
          <div className="col-4 align-items-center justify-content-between flex-column text-start">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>School</p>
          </div>
          <div className="col-4 align-items-center justify-content-between flex-column">
            <Button variant="info">Torna su</Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
