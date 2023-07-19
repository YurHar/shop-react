import MainContent from "../../components/layout/main-content";
import { Table, } from 'antd';
import {useColumns} from "./use-column";
import {useEffect, useState} from "react";

const contentStyle = {
  width: '80%',
  height: "450",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: '20px',
};

export const ProductTable = () => {

  const columns = useColumns();

  const dataWithStatus = JSON.parse(localStorage.getItem("soldItems")).map((item) => ({ ...item, status: 'Accepted' }));

  return (
    <MainContent>
      <div style={contentStyle}>
        <Table columns={columns} dataSource={dataWithStatus} />
      </div>
    </MainContent>
  );
}