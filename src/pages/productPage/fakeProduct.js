import { Row, Col, Image, Typography, Rate, Button, message } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import MainContent from "../../components/layout/main-content";

const { Text } = Typography;

export const FakeProduct = () => {
  const { state } = useLocation();

  const handleAddToCard = () => {
    message.warning("Fake! Can't be added");
  };

  return (
    <MainContent>
      <Row justify="center" style={{ marginTop: "30px", marginLeft: "10%" }}>
        <Col sm={24} md={12} lg={8}>
          <Image width={400} src={state.state.src} />
        </Col>

        <Col sm={24} md={12} lg={12}>
          <Row gutter={[16, 0]}>
            <Col span={16}>
              <h1>Deserunt enim labore id ad ad.</h1>
            </Col>
          </Row>

          <Row>
            <Text type="secondary">fake products</Text>
          </Row>

          <Row style={{ margin: "7px 0" }}>
            <Col span={16}>{<h3>{"$ " + 0.0}</h3>}</Col>
          </Row>

          <Row style={{ margin: "15px 0" }}>
            <Col span={16}>
              Voluptate irure cillum ad sunt anim aute anim amet irure aliqua
              non laborum ut. Pariatur sint quis et nulla. Nostrud esse labore
              cupidatat est nisi elit et laboris irure.
            </Col>
          </Row>

          <Row style={{ margin: "25px 0" }}>
            <Rate disabled defaultValue={0} />
          </Row>

          <Row>
            <Button type="primary" ghost size="large" onClick={handleAddToCard}>
              Add to cart <ShoppingCartOutlined />
            </Button>
          </Row>
        </Col>
      </Row>
    </MainContent>
  );
};
