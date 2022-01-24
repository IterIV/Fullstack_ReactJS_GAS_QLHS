import { Layout } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderSidebar = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  border-right: 1px solid #eee;
  img {
    height: 40px;
  }
  h1 {
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0;
    margin-left: 15px;
  }
`;
export const SidebarWrapper = styled(Layout.Sider)`
  background-color: white;
  width: 260px !important;
  max-width: none !important;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 4;
  @media screen and (max-width: 992px) {
    transform: translateX(-110%);
    &.expand {
      transform: translateX(0);
    }
  }
`;
