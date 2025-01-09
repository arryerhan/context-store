import { useContext } from "react";
import { BasketContext } from "../context/basketContext";

const Card = ({ product }) => {
  const { basket, addToBasket } = useContext(BasketContext);

  const basketItem = basket.find((i) => i.id === product.id);

  return (
    <div className="card py-3">
      <div className="d-flex justify-content-center">
        <img src={product.image} height={120} className="object-fit-contain" />
      </div>
      <div className="card-body">
        <h4 className="text-truncate">{product.title} </h4>
        <h4 className="text-secondary">{product.category} </h4>
        <h5 className="text-success">${product.price.toFixed(2)}</h5>
        <button className="w-100 rounded" onClick={() => addToBasket(product)}>
          Add to Cart ({basketItem?.amount || 0})
        </button>
      </div>
    </div>
  );
};

export default Card;