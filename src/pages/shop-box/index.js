import MainContent from "../../components/layout/main-content";
import {useEffect, useState} from "react";
import {Button, Card, Col, Rate, Row} from "antd";
import {Total} from "../../components/total";

const {Meta} = Card;

export const ShopBox = () => {
    const [items, setItems] = useState([]);

    const buyItems = JSON.parse(localStorage.getItem('buyItems'));

    useEffect(() => {
        setItems(buyItems);
    }, [items]);

    const handleDelete = (id) => {
        const index = items.findIndex(item => item.id === id);

        if (index !== -1) {
            items.splice(index, 1);
            localStorage.setItem('buyItems', JSON.stringify(items));
        }
    }

    const handleSubmit = () => {
        localStorage.setItem('soldItems', JSON.stringify(items));
        setItems([]);
        localStorage.removeItem('buyItems');
    }

    let sum = 0;

    return (
        <MainContent>
            <Row style={{padding: 30}}>
                <h1>Shopping Cart</h1>
            </Row>
            <Row gutter={26} justify={'start'} style={{padding: 50, margin: 0}}>
                {items?.map((item, index) => {
                    sum += item.price;
                    return (
                        <Col key={item.id}>
                            <Card
                                hoverable
                                style={{
                                    width: 240,
                                    height: 485,
                                }}
                                actions={[
                                    <Button type='primary' onClick={() => handleDelete(item.id)} ghost>Delete</Button>
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
            <Row justify='end'>
                <Col><Button type="primary" style={{background: '#0acb21', marginRight: '120px'}} onClick={() => handleSubmit()} >Pay</Button></Col>
            </Row>
            <Row justify='center'>
                <Col span={12}>
                    <Total total={Math.round(sum)}/>
                </Col>
            </Row>
        </MainContent>
    )
}