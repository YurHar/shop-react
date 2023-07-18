import { Products } from "../../../components/products/Products";
import { useState, useEffect } from "react";
import { WOMEN_ALTER_IMAGES } from "../constants";

export const TShirtWomen = () => {
  const [womenShirt, setWomenShirt] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then((res) => res.json())
      .then((json) => setWomenShirt(json));
  }, []);

  let womenClothing = womenShirt.filter(
    (product) => product.category === `women's clothing`
  );
  return (
    <>
      <Products
        products={womenClothing}
        title={"Women T-shirt"}
        alterImages={WOMEN_ALTER_IMAGES}
      />
    </>
  );
};
