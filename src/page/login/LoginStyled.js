import { Form } from "antd";
import styled from "styled-components";

export const LoginFooter = styled.p`
  position: absolute;
  bottom: 0;
  right: 20px;
  color: #aaa;
`;
export const LoginForm = styled(Form)`
  .ant-form-item {
    margin: 15px 0;
  }
`;
export const LoginHeader = styled.h1`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin: 20px 0;
  text-transform: capitalize;
`;

export const LoginPanel = styled.div`
  width: 350px;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%);
  padding: 40px;
  border-radius: 10px;
  position: relative;
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    background-color: #eee;
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
export const LoginWrapper = styled.div`
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
