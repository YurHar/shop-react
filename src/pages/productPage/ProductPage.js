import { useEffect, useState } from 'react';
import { Row, Col, Image, Typography, Rate, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';

const { Text } = Typography;

export const ProductPage = ({}) => {
  const [product, setProduct] = useState({});
  const [buyItems, setBuyItems] = useState([]);

  const { state } = useLocation();

  console.log(state);

  useEffect(() => {
    localStorage.setItem('buyItems', JSON.stringify(buyItems));
  }, [buyItems]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${state.id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  const handleAddToCard = (product) => {
    setBuyItems((prevArr) => [...prevArr, product]);
  };

  console.log(product?.rating?.rate);

  return (
    <>
      <Row justify="center" style={{ marginTop: '30px' }}>
        <Col sm={24} md={12} lg={8}>
          <Image width={400} src={product.image} />
        </Col>

        <Col sm={24} md={12} lg={12}>
          <Row gutter={16}>
            <Col span={16}>
              <h1>{product.title}</h1>
            </Col>
          </Row>

          <Row>
            <Text type="secondary">{product.category}</Text>
          </Row>

          <Row style={{ margin: '10px 0' }}>
            <Col span={16}>{<h3>{'$ ' + product.price}</h3>}</Col>
          </Row>

          <Row style={{ margin: '15px 0' }}>
            <Col span={16}>{product.description}</Col>
          </Row>

          <Row style={{ margin: '25px 0' }}>
            <Rate disabled value={product?.rating?.rate} />
          </Row>

          <Row>
            <Button type="primary" ghost size="large" onClick={() => handleAddToCard(product)}>
              Add to cart <ShoppingCartOutlined />
            </Button>
          </Row>
        </Col>
      </Row>
    </>
  );
};
