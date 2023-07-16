import { Products } from "../../../components/products/Products";
import { useState, useEffect } from "react";
import { ELECTRONICS_ALTER_IMAGES } from "../constants";

export const Electronics = () => {
  const [electronics, setElectronics] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/electronics`)
      .then((res) => res.json())
      .then((json) => setElectronics(json));
  }, []);

  return (
    <>
      <Products
        products={electronics}
        title={"Electronics"}
        alterImages={ELECTRONICS_ALTER_IMAGES}
      />
    </>
  );
};
