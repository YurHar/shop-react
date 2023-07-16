import { Products } from "../../../components/products/Products";
import { useState, useEffect } from "react";
import { MEN_ALTER_IMAGES } from "../constants";

export const TShirtMen = () => {
  const [menShirt, setMenShirt] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then((res) => res.json())
      .then((json) => setMenShirt(json));
  }, []);

  let menClothing = menShirt.filter(
    (product) => product.category === `men's clothing`
  );

  return (
    <>
      <Products
        products={menClothing}
        title={"Men T-shirt"}
        alterImages={MEN_ALTER_IMAGES}
      />
    </>
  );
};
