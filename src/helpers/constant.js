import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { DrawerMenu } from "../components/drawer";

export const PATHS = {
    ROOT: "/",
    HOME: "/home",
    LOGIN: "/login",
    CLOTHING: "/clothing",
    ACCESSORIES: "/accessories",
    T_SHIRT: '/t-shirt',
    HOODIE: '/hoodie',
    ABOUT: "/about",
    SHOP_BOX: "/shop-box",
    PRODUCT_PAGE: "productpage",
    FAKE_PRODUCT: "/fakeproduct",
    PRODUCT_TABLE: '/product-table',
    FAQ: '/Faq',
    CONTACTS: '/Contacts',
    MESSAGE_VIEW: '/messageview'
};

export const NAVBAR = [
    {
        label: "Home",
        path: "/home",
        key: "/home",
    },
    {
        label: "Clothing",
        path: "SubMenu",
        key: "SubMenu",
        children: [
            {
                type: "group",
                label: "Clothing",
                children: [
                    {
                        label: "Tops for Men",
                        path: "/clothing/men",
                        key: "/clothing/men",
                    },
                    {
                        label: "Tops for Women",
                        path: "/clothing/women",
                        key: "/clothing/women",
                    },
                ],
            },
        ],
    },
    {
        label: "Accessorize",
        path: "SubMenu1",
        key: "SubMenu1",
        children: [
            {
                type: "group",
                label: "Accessorize",
                children: [
                    {
                        label: "Electronics",
                        path: "/accessories/electronics",
                        key: "/accessories/electronics",
                    },
                    {
                        label: "Jewelry",
                        path: "/accessories/jewelery",
                        key: "/accessories/jewelery",
                    },
                ],
            },
        ],
      },
    {
        label: "About",
        path: "/about",
        key: "/about",
    },
];

