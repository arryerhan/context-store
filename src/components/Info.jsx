import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="text-center fs-5">
      <p>Your Cart is Empty</p>

      <Link to="/" className="btn btn-primary">
        Go to Products
      </Link>
    </div>
  );
};

export default Info;