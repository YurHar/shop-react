export const Jewelery = () => {
  const [jewelery, setJewelery] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/jewelery`)
      .then((res) => res.json())
      .then((json) => setJewelery(json));
  }, []);

  return (
    <>
      <Products
        products={jewelery}
        title={"Jewelery"}
        alterImages={JEWELERY_ALTER_IMAGES}
      />
    </>
  );
};
