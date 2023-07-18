import { useEffect, useState } from "react";
import { Row, Col, Image, Typography, Rate, Button, message } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import MainContent from "../../components/layout/main-content";

const { Text } = Typography;

export const ProductPage = ({}) => {
  const [product, setProduct] = useState({});
  const [buyItems, setBuyItems] = useState(
    JSON.parse(localStorage.getItem("buyItems"))
      ? JSON.parse(localStorage.getItem("buyItems"))
      : []
  );

  const { state } = useLocation();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${state.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
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
    <MainContent>
      <Row justify="center" style={{ marginTop: "30px", marginLeft: "10%" }}>
        <Col sm={24} md={12} lg={8}>
          <Image width={400} src={product.image} />
        </Col>

        <Col sm={24} md={12} lg={12}>
          <Row gutter={[16, 0]}>
            <Col span={16}>
              <h1>{product.title}</h1>
            </Col>
          </Row>

          <Row>
            <Text type="secondary">{product.category}</Text>
          </Row>

          <Row style={{ margin: "7px 0" }}>
            <Col span={16}>{<h3>{"$ " + product.price}</h3>}</Col>
          </Row>

          <Row style={{ margin: "15px 0" }}>
            <Col span={16}>{product.description}</Col>
          </Row>

          <Row style={{ margin: "25px 0" }}>
            <Rate disabled value={product?.rating?.rate} />
          </Row>

          <Row>
            <Button
              type="primary"
              ghost
              size="large"
              onClick={() => handleAddToCard(product)}
            >
              Add to cart <ShoppingCartOutlined />
            </Button>
          </Row>
        </Col>
      </Row>
    </MainContent>
  );
};
