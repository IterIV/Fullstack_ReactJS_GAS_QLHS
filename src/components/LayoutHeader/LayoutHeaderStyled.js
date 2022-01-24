import { Button, Layout, Menu } from "antd";
import styled from "styled-components";

export const DropdownHeader = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 10px;
  .drop__headerText {
    margin-left: 10px;
    p:first-of-type {
      font-weight: 700;
    }
    p:last-of-type {
      opacity: 0.8;
    }
  }
  p {
    margin-bottom: 0;
  }
`;
export const HeaderDropdownMenu = styled(Menu)`
  padding: 10px;
  border-radius: 5px;
`;
export const MenubarButton = styled(Button)`
  visibility: hidden;
  cursor: pointer;
  :active {
    background-color: #eee;
  }
  @media screen and (max-width: 992px) {
    visibility: visible;
  }
`;
export const HeaderWraper = styled(Layout.Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 0 20px;
`;
