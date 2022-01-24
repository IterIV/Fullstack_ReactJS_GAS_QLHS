import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  LogoutOutlined,
  MenuOutlined,
  UserOutlined,
} from "@ant-design/icons/lib/icons";
import { Dropdown, Menu } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { logoutAction } from "../../redux/actions/UserAction";
import {
  DropdownHeader,
  HeaderDropdownMenu,
  HeaderWraper,
  MenubarButton,
} from "./LayoutHeaderStyled";

const LayoutHeader = ({ handleSidebarExpand }) => {
  const { user } = useSelector((rootReducer) => rootReducer.UserReducer);
  const dispatch = useDispatch();
  const handleLogoutClick = () => {
    dispatch(logoutAction());
  };

  const menu = (
    <HeaderDropdownMenu>
      <DropdownHeader>
        <Avatar size={40} icon={<UserOutlined />} src={user?.hinhAnh} />
        <div className="drop__headerText">
          <p>{user?.taiKhoan}</p>
          <p>{user?.tenVietTat}</p>
        </div>
      </DropdownHeader>
      <Menu.Divider />
      <Menu.Item key="1" icon={<LogoutOutlined />} onClick={handleLogoutClick}>
        Đăng xuất
      </Menu.Item>
    </HeaderDropdownMenu>
  );
  return (
    <HeaderWraper>
      <MenubarButton
        icon={<MenuOutlined />}
        type="text"
        shape="circle"
        onClick={handleSidebarExpand}
      />
      <Dropdown
        overlay={menu}
        placement="bottomRight"
        trigger={["click"]}
        arrow
      >
        <Avatar
          size={40}
          icon={<UserOutlined />}
          src={user?.hinhAnh}
          style={{ cursor: "pointer" }}
        />
      </Dropdown>
    </HeaderWraper>
  );
};

export default LayoutHeader;
