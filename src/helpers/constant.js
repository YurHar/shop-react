import {ShoppingCartOutlined} from "@ant-design/icons";
import {Button} from "antd";

export const PATHS = {
    ROOT: '/',
    HOME: 'home',
    CLOTHING: 'clothing',
    ACCESSORIZE: 'accessorize',
    ABOUT: 'about',
    T_SHIRT: 't-shirt',
    HOODIE: 'hoodie',
    SHOP_BOX: 'shop-box',
}

export const NAVBAR = [
    {
        label: 'Home',
        key: '/',
    },
    {
        label: 'Men',
        key: 'SubMenu',
        children: [
            {
                type: 'group',
                label: 'CLOTHING',
                children: [
                    {
                        label: 'T-Shirts & Tops',
                        key: 't-shirt/men',
                    },
                    {
                        label: 'Hoodies & Sweatshirts',
                        key: 'hoodie/men',
                    },
                ],
            },
        ],
    },
    {
        label: 'Women',
        key: 'SubMenu1',
        children: [
            {
                type: 'group',
                label: 'CLOTHING',
                children: [
                    {
                        label: 'T-Shirts & Tops',
                        key: 't-shirt/women',
                    },
                    {
                        label: 'Hoodies & Sweatshirts',
                        key: 'hoodie/women',
                    },
                ],
            },
        ],
    },
    {
        label: 'About',
        key: '/about',
    },
    {
        label: <Button><ShoppingCartOutlined /></Button>,
        key: '/shop-box',
    },
];