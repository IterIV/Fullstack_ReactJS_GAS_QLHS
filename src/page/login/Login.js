import { Alert, Button, Form, Input } from "antd";
import React from "react";
import { useEffect } from "react";
import {
  LoginFooter,
  LoginForm,
  LoginHeader,
  LoginPanel,
  LoginWrapper,
} from "./LoginStyled";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { loginAction } from "../../redux/actions/UserAction";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    document.title = "Đăng nhập";
  }, []);
  const dispatch = useDispatch();
  const { user, isLoading, message } = useSelector(
    (rootReducer) => rootReducer.UserReducer
  );
  const onFinish = (values = null) => {
    if (values) {
      console.log(values);

      dispatch(loginAction(JSON.stringify(values)));
    }
  };
  const onFinishFailed = (errorInfo = null) => {
    console.log("Failed:", errorInfo);
  };
  if (user) {
    return <Redirect to="/" />;
  }
  return (
    <LoginWrapper>
      <LoginPanel>
        <img src="./assets/img/logo.png" alt="Logo" />
        <LoginHeader>Login to Iter Management</LoginHeader>
        <LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item
            name="taiKhoan"
            rules={[{ required: true, message: "Tài khoản không để trống!" }]}
          >
            <Input
              placeholder="Tài khoản"
              size="large"
              allowClear
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item
            name="matKhau"
            rules={[{ required: true, message: "Mật khẩu không để trống!" }]}
          >
            <Input
              type="password"
              placeholder="Mật khẩu"
              size="large"
              prefix={<LockOutlined />}
            />
          </Form.Item>
          {message && (
            <Form.Item>
              <Alert message={message} type="error" />
            </Form.Item>
          )}
          <Form.Item>
            <Button
              type="primary"
              shape="round"
              block
              size="large"
              htmlType="submit"
              loading={isLoading}
            >
              Đăng nhập
            </Button>
          </Form.Item>
        </LoginForm>
        <LoginFooter>Được tạo bởi Iter - ngminhduc1078@gmail.com</LoginFooter>
      </LoginPanel>
    </LoginWrapper>
  );
};

export default Login;
