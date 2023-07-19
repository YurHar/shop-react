import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Divider, message, Rate, Row } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { PATHS } from "../../helpers/constant";

const { Meta } = Card;

export const Suggestion = () => {
  const [data, setData] = useState();
  const [buyItems, setBuyItems] = useState(
    JSON.parse(localStorage.getItem("buyItems"))
      ? JSON.parse(localStorage.getItem("buyItems"))
      : []
  );

  const navigate = useNavigate();

  const handleShowProduct = (id) => {
    navigate(`/${PATHS.PRODUCT_PAGE}/${id}`, { state: { id: id } });
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=7")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

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

  return (
    <>
      <Divider />
      <h1 style={{ margin: "40px 40px", fontFamily: "Inter, sans-serif" }}>
        Suggestion
      </h1>
      <Row gutter={[26, 26]} justify={"center"} style={{ margin: 0 }}>
        {data?.map((item) => {
          return (
            <Col key={item.id}>
              <Card
                hoverable
                style={{
                  width: 240,
                  height: 485,
                }}
                actions={[
                  <Button
                    type="primary"
                    ghost
                    onClick={() => handleAddToCard(item)}
                  >
                    Add to cart <ShoppingCartOutlined />
                  </Button>,
                ]}
                cover={
                  <img
                    alt="example"
                    style={{ height: 270 }}
                    src={item.image}
                    onClick={() => handleShowProduct(item.id)}
                  />
                }
              >
                <Meta
                  title={item.title}
                  description={<h3>{item.price + " $"}</h3>}
                  onClick={() => handleShowProduct(item.id)}
                />
                <Rate disabled defaultValue={item?.rating?.rate} />
              </Card>
            </Col>
          );
        })}
      </Row>
      <Divider />
    </>
  );
};
