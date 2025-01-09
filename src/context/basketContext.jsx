import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    const found = basket.find((i) => i.id === product.id);

    if (!found) {
      setBasket(basket.concat({ ...product, amount: 1 }));

      toast.success("Added to your cart");
    } else {
      const updated = { ...found, amount: found.amount + 1 };
      const newBasket = basket.map((i) => (updated.id === i.id ? updated : i));
      setBasket(newBasket);

      toast.info(`Item added (${updated.amount})`);
    }
  };

  const removeFromBasket = (delete_id) => {
    const filtred = basket.filter((item) => item.id !== delete_id);

    setBasket(filtred);

    toast.error("Item removed from your cart");
  };

  const decreaseAmount = (delete_id) => {
    const found = basket.find((item) => item.id === delete_id);

    if (found.amount > 1) {
      const updated = { ...found, amount: found.amount - 1 };

      const newBasket = basket.map((item) =>
        item.id === updated.id ? updated : item
      );

      setBasket(newBasket);

      toast.info(`Item removed ${updated.amount}`);
    } else {
      removeFromBasket(delete_id);
    }
  };

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket, decreaseAmount }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;