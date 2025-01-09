const Total = ({ basket }) => {
    const totalAmount = basket.reduce((acc, item) => acc + item.amount, 0);
  
    const totalPrice = basket.reduce(
      (acc, item) => acc + item.price * item.amount,
      0
    );
  
    return (
      <div className="rounded my-5 shadow border p-4 d-flex flex-column justify-content-between">
        <div className="fs-4">
          <p>
            There are <span className="text-warning fw-bold">{totalAmount}</span>{" "}
            items in your Cart
          </p>
  
          <p>
            Total {" "}
            <span className="text-success fw-bold">${totalPrice.toFixed(2)}</span>
          </p>
        </div>
  
        <button className="btn btn-warning py-2 px-4">Place My Order</button>
      </div>
    );
  };
  
  export default Total;