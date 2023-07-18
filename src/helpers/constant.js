import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
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
    label: "Home",
    path: "/",
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
  {
    label: (
      <Button>
        <UserOutlined />
      </Button>
    ),
    path: "/login",
    key: "/login",
  },
  {
    label: <DrawerMenu />,
    path: "",
    key: "/",
  },
];
  
