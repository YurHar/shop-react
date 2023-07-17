import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { DrawerMenu } from "../components/drawer";


export const PATHS = {
    ROOT: '/',
    HOME: '/home',
    LOGIN: '/login',
    CLOTHING: '/clothing',
    ACCESSORIZE: '/accessorize',
    ABOUT: '/about',
    T_SHIRT: '/t-shirt',
    HOODIE: '/hoodie',
    SHOP_BOX: '/shop-box',
    PRODUCT_TABLE: '/product-table',
    FAQ: '/faq',
    CONTACTS: '/contacts'
}

export const NAVBAR = [
    {
        label: 'Home',
        path: '/',
        key: '/home',
    },
    {
        label: 'Men',
        path: 'SubMenu',
        key: 'SubMenu',
        children: [
            {
                type: 'group',
                label: 'CLOTHING',
                children: [
                    {
                        label: 'T-Shirts & Tops',
                        path: 't-shirt/men',
                        key: 't-shirt/men',
                    },
                    {
                        label: 'Hoodies & Sweatshirts',
                        path: 'hoodie/men',
                        key: 'hoodie/men',
                    },
                ],
            },
        ],
    },
    {
        label: 'Women',
        path: 'SubMenu1',
        key: 'SubMenu1',
        children: [
            {
                type: 'group',
                label: 'CLOTHING',
                children: [
                    {
                        label: 'T-Shirts & Tops',
                        path: '/t-shirt/women',
                        key: '/t-shirt/women',
                    },
                    {
                        label: 'Hoodies & Sweatshirts',
                        path: '/hoodie/women',
                        key: '/hoodie/women',
                    },
                ],
            },
        ],
    },

    {
        label: 'About',
        path: '/about',
        key: '/about',
    },

    {
        label: <Button><UserOutlined /></Button>,
        path: '/login',
        key: '/login',
    },
    {
        label: <DrawerMenu />,
        path: '',
        key: '/',
    },
];