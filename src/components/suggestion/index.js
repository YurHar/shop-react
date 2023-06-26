import {useEffect, useState} from "react";
import {Button, Card, Col, Rate, Row} from "antd";

const {Meta} = Card;

export const Suggestion = () => {
    const [data, setData] = useState()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=6')
            .then(res => res.json())
            .then(json => setData(json))
    }, []);

    console.log(data)

    return (
        <>
            <h1>Suggestion</h1>
            <Row gutter={16}>
                {data?.map((item, index) => {
                    return (
                        <Col span={4} key={item.id}>
                            <Card
                                hoverable
                                style={{
                                    width: 240,
                                    height: 450,
                                }}
                                actions={[
                                    <Button type='primary' ghost>Buy</Button>
                                ]}
                                cover={<img alt="example" style={{height: 270}} src={item.image}/>}
                            >
                                <Meta
                                    title={item.title}
                                    description={<h3>{item.price + ' $'}</h3>}
                                />
                                <p></p>
                                <Rate disabled defaultValue={item?.rating?.rate}/>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}