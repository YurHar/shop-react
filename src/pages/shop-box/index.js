import MainContent from "../../components/layout/main-content";
import {useEffect, useState} from "react";
import {Button, Card, Col, Rate, Row} from "antd";

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

    return (
        <MainContent>
            <Row style={{padding: 30}}>
                <h1>Shopping Card</h1>
            </Row>
            <Row gutter={26} justify={'start'} style={{padding: 50, margin: 0}}>
                {items?.map((item, index) => {
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
            <Row justify='end' style={{paddingRight: 170}}>
                <Col>{items && <Button type="primary" ghost>Submit</Button>}</Col>
            </Row>
        </MainContent>
    )
}