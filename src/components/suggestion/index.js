import {useEffect, useState} from "react";
import {Button, Card, Col, Rate, Row} from "antd";
import {ShoppingCartOutlined} from "@ant-design/icons";

const {Meta} = Card;

export const Suggestion = () => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=7')
            .then(res => res.json())
            .then(json => setData(json))
    }, []);

    const handleAddToCard = (e) => {
        console.log(e)
    }

    return (
        <>
            <h1 style={{margin: '40px 40px', fontFamily: 'Inter, sans-serif'}}>Suggestion</h1>
            <Row gutter={26} justify={'center'} style={{margin: 0}}>
                {data?.map((item, index) => {
                    return (
                        <Col key={item.id}>
                            <Card
                                hoverable
                                style={{
                                    width: 240,
                                    height: 485,
                                }}
                                actions={[
                                    <Button type='primary' ghost onClick={() => handleAddToCard(item)}>Add to cart <ShoppingCartOutlined /></Button>
                                ]}
                                cover={<img alt="example" style={{height: 270}} src={item.image}/>}
                            >
                                <Meta
                                    title={item.title}
                                    description={<h3>{item.price + ' $'}</h3>}
                                />
                                <Rate disabled defaultValue={item?.rating?.rate}/>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}