import {
  DashboardOutlined,
  FileDoneOutlined,
  FileSyncOutlined,
  FileUnknownOutlined,
  ProfileOutlined,
} from "@ant-design/icons/lib/icons";
import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { HeaderSidebar, SidebarWrapper } from "./SidebarMenuStyled";

const SidebarMenu = ({ isExpand }) => {
  return (
    <SidebarWrapper className={isExpand ? "expand" : ""}>
      <HeaderSidebar to="/">
        <img src="./assets/img/logo.png" alt="Logo" />
        <h1>Iter Management</h1>
      </HeaderSidebar>
      <Menu mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <Link to="/">Tổng quan</Link>
        </Menu.Item>
        <Menu.SubMenu
          key="subHoSoTD"
          title="Hồ sơ thẩm duyệt"
          icon={<ProfileOutlined />}
        >
          <Menu.Item key="2" icon={<FileUnknownOutlined />}>
            Hồ sơ mới tiếp nhận
          </Menu.Item>
          <Menu.Item key="3" icon={<FileSyncOutlined />}>
            Hồ sơ đang xử lý
          </Menu.Item>
          <Menu.Item key="4" icon={<FileDoneOutlined />}>
            Kết quả hồ sơ
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </SidebarWrapper>
  );
};

export default SidebarMenu;
