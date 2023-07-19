import { Col, Row } from "antd";
import { useState, useEffect } from "react";
import BodyFoto from "./images/body-foto-1.webp"

export const Body = () => {
 
    return (
        <>
            <Row style={{ position: "relative", marginTop: "230px", paddingLeft: "50px" }}>
                <Col span={12}>
                    <Col style={{ textAlign: "center" }}>
                        <h2>"Top-Shop"  provides all the necessary services for the online sale of goods
                            manufactured in Armenia</h2>
                    </Col>
                    <Col>
                        <p style={{ fontSize: "16px" }}>
                            It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The point of
                            using Lorem Ipsum is that it has a more-or-less normal distribution of
                            letters, as opposed to using 'Content here, content here', making it
                            look like readable English. Many desktop publishing packages and
                            web page editors now use Lorem Ipsum as their default model text,
                            and a search for 'lorem ipsum' will uncover many web sites still
                            in their infancy. Various versions have evolved over the years,
                            sometimes by accident, sometimes on purpose (injected humour and the like).
                            The standard chunk of Lorem Ipsum used since the 1500s is
                            reproduced below for those interested. Sections 1.10.32 and
                            1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
                            reproduced in their exact original form, accompanied by English
                            versions from the 1914 translation by H. Rackham.
                        </p>
                    </Col>
                </Col>
                <Col span={12}>
                    <img src={BodyFoto}
                        style={{ width: "90%", height: "400px", marginLeft: "40px" }} />
                </Col>
            </Row>
        </>
    )
}