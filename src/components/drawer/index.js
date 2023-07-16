import {Button, Card, Col, Drawer, Rate, Row} from "antd";
import {useEffect, useState} from "react";
import {CloseOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import {Total} from "../total";

export const DrawerMenu = () => {
    const [open, setOpen] = useState(false);
    const [shopCard, setShopCard] = useState([]);

    useEffect(() => {
        setShopCard(JSON.parse(localStorage.getItem('buyItems')));
    }, [open]);

    const handleDelete = (id) => {
        const filteredCard = shopCard.filter(item => item.id !== id);
        localStorage.setItem('buyItems', JSON.stringify(filteredCard));
        setShopCard(filteredCard);
    }

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    console.log(shopCard);

    return (
        <>
            <Button onClick={showDrawer}>
                <ShoppingCartOutlined/>
            </Button>
            <Drawer title="Shop Card" width={520} closable={false} onClose={onClose} open={open}>
                {shopCard?.map((item, index) => {
                    return (
                        <Card
                            hoverable
                            key={item.id}
                            title={index + 1}
                            extra={<CloseOutlined onClick={() => handleDelete(item.id)}
                                                  style={{float: 'right', cursor: 'pointer'}}/>}
                            style={{
                                width: "100%",
                                marginBottom: 20,
                            }}
                        >
                            <Row justify={'space-between'}>
                                <Col span={8}>
                                    <img alt="example" style={{height: 150}} src={item.image}/>
                                </Col>
                                <Col span={15} style={{padding: 20}}>
                                    <h3>{item.title}</h3>
                                    <h4>{item.price + ' $'}</h4>
                                    <Rate disabled defaultValue={item?.rating?.rate}/>
                                </Col>
                            </Row>
                        </Card>
                    )
                })}
                <Total total={shopCard.length}/>
                <Row justify={'center'}>
                    <Col>{shopCard && <Button type="primary" ghost>Submit</Button>}</Col>
                </Row>
            </Drawer>
        </>
    );
};