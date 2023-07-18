import { Button, Card, Rate, Typography, message } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HoverableOptions } from "./HoverableOptions";
import { PATHS } from "../../helpers/constant";

const { Text } = Typography;
const { Meta } = Card;

export const SignleProduct = ({ product, alterImages }) => {
  const [show, setShow] = useState(false);
  const [imgCover, setImgCover] = useState(product.image);
  const [buyItems, setBuyItems] = useState(
    JSON.parse(localStorage.getItem("buyItems"))
      ? JSON.parse(localStorage.getItem("buyItems"))
      : []
  );

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("buyItems", JSON.stringify(buyItems));
  }, [buyItems]);

  const handleAddToCard = (e) => {
    const existing = JSON.parse(localStorage.getItem("buyItems"));

    const filteredData = existing.some((current) => current.id === e.id);

    if (!filteredData) {
      setBuyItems((prevArr) => [...prevArr, e]);
      message.success("Successfully added");
    } else {
      message.warning("Already added");
    }
  };

  const showAlterImages = () => setShow((prev) => !prev);

  const changeCover = (imgPath) => {
    setImgCover(imgPath);
  };

  const bringCoverBack = () => setImgCover(product.image);

  const handleShowProduct = (id) => {
    navigate(`/${PATHS.PRODUCT_PAGE}/${id}`, { state: { id: id } });
  };

  return (
    <>
      <Card
        style={{
          width: 240,
          minHeight: 485,
        }}
        actions={[
          <Button type="primary" ghost onClick={() => handleAddToCard(product)}>
            Add to cart <ShoppingCartOutlined />
          </Button>,
        ]}
        cover={
          <img
            alt="example"
            style={{ height: 270 }}
            src={imgCover}
            onClick={() => handleShowProduct(product.id)}
          />
        }
        onMouseEnter={showAlterImages}
        onMouseLeave={showAlterImages}
      >
        {show
          ? alterImages.map((img) => (
              <HoverableOptions
                key={img.key}
                changeCover={changeCover}
                bringCoverBack={bringCoverBack}
                image={img}
              />
            ))
          : null}

        <Text type="secondary">{product.category}</Text>

        <Meta
          onClick={handleShowProduct}
          title={product.title}
          description={<h3>{"$ " + product.price}</h3>}
        />

        <Rate disabled defaultValue={product?.rating?.rate} />
      </Card>
    </>
  );
};
