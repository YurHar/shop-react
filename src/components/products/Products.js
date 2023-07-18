import { SignleProduct } from "./SignleProduct";
import { Col, Row } from "antd";

export const Products = ({ products, title, alterImages }) => {
  return (
    <>
      <h1 style={{ margin: "40px 40px", fontFamily: "Inter, sans-serif" }}>
        {title}
      </h1>
      <Row gutter={[26, 70]} style={{ margin: "0 5%" }}>
        {products.map((product) => {
          return (
            <Col key={product.id}>
              <SignleProduct product={product} alterImages={alterImages} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};
