import {Space, Button, Tag} from 'antd';
import {useState} from "react";

export const useColumns = () => {
    const [activeStatus, setStatus] = useState();

    const handleChangeStatus = (id, dataIndex, value) => {
        setStatus(() =>
            JSON.parse(localStorage.getItem("soldItems")).map((item) =>
                item.id === id && { ...item, status: value }
            )
        );
    }

    return [
        {
            title: 'No',
            dataIndex: 'id',
            key: 'id',
            align: 'center',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            align: 'center',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            align: 'center',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            align: 'center',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            align: 'center',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            align: 'center',
            render: () => (
                <Tag color="blue" key={activeStatus}>
                    {activeStatus}
                </Tag>
            )
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center',
            render: (text, record) => (
                <Space size="middle">
                    <Button type='primary' onClick={() => handleChangeStatus(record.id, 'status', 'In Progres')}>In Progres</Button>
                    <Button type='primary' onClick={() => handleChangeStatus(record.id, 'status', 'Delivered')}>Delivered</Button>
                </Space>
            ),
        },
    ];
};