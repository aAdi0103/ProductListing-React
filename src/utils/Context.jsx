import { createContext, useState, useEffect } from "react";
import axios from "./axios";
export const productContext = createContext();
const Context = (props) => {
  const [products, setProducts] = useState(null);

  // call Api to get products
  const getProducts = async () => {
    try {
      const data = await axios("products");
      setProducts(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <productContext.Provider value={[products, setProducts]}>
        {props.children}
      </productContext.Provider>
    </>
  );
};
export default Context;
