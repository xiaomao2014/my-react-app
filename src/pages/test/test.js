import React from "react";
import './test.less'
import { Table, Popover, Button } from "antd";


const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

function TEST() {
  return (
    <div className="test">
      <div>
        我是test，测试使用less的。
      </div>
      <h3>表格测试：</h3>
      <div>
        <Table dataSource={dataSource} columns={columns} />
      </div>
      <div>
        <Popover content={content} title="Title">
          <Button type="primary">Hover me</Button>
        </Popover>
      </div>
    </div>
  );
}

export default TEST;
