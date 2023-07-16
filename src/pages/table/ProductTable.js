import MainContent from "../../components/layout/main-content";
import { Table, } from 'antd';
import { ColumnsType,data } from "./constant"


const contentStyle = {
  width: '80%',
  height: "450",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: '20px',
};

export const ProductTable = () => {


  return (
    <MainContent>
      <div style={contentStyle}>
        <Table columns={ColumnsType} dataSource={data} />
      </div>

    </MainContent>
  );
}


