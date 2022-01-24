import { Card, DatePicker, Form, Input } from "antd";
import React from "react";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import moment from "moment";
const AddNewDocument = () => {
  const breadcumData = [
    {
      title: "Tổng quan",
      src: "/",
    },
    {
      title: "Hồ sơ thẩm duyệt",
      src: "",
    },
    {
      title: "Thêm hồ sơ mới",
      src: "",
    },
  ];
  return (
    <>
      <ContentHeader data={breadcumData} />
      <Card title="Thêm hồ sơ mới">
        <Form>
          <Form.Item label="Ngày nhận">
            <DatePicker defaultValue={moment()} format={"DD/MM/YYYY"} />
          </Form.Item>
          <Form.Item label="Ngày hẹn trả">
            <DatePicker defaultValue={moment()} format={"DD/MM/YYYY"} />
          </Form.Item>
          <Form.Item label="Tên công trình">
            <Input />
          </Form.Item>
          <Form.Item label="Địa điểm">
            <Input />
          </Form.Item>
          <Form.Item label="Chủ đầu tư">
            <Input />
          </Form.Item>
          <Form.Item label="Đơn vị thiết kế">
            <Input />
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default AddNewDocument;
