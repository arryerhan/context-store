import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import Card from "../components/Card";
import Loader from "../components/Loader";

const Home = () => {
  const { products, setProducts, selectedCategory } =
    useContext(ProductContext);

  return (
    <div className="mt-4 container">
      <h1>{products.length > 0 && products.length + " items found "} </h1>
      <h2 className="text-warning mt-2">
        {selectedCategory != "all" && "Results for " + selectedCategory}
      </h2>

      <>
        {products.length > 0 ? (
          <div className="wrapper">
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}

          </div>
        ) : (
          <Loader />
        )}
      </>
    </div>
  );
};

export default Home;