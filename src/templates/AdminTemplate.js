import { Layout } from "antd";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import styled from "styled-components";
import LayoutHeader from "../components/LayoutHeader/LayoutHeader";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";

const LayoutMain = styled(Layout)`
  padding-left: 260px;
  min-height: 100vh;
  background-color: #f9fbfd;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 992px) {
    padding-left: 0;
    .main_bgoverlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 0;
      opacity: 0;
      transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
      &.bgoverlay-show {
        opacity: 1;
        z-index: 2;
      }
    }
  }
`;

const AdminTemplate = (props) => {
  const { user } = useSelector((rootReducer) => rootReducer.UserReducer);
  const [isExpand, setExpand] = useState(false);
  const handleSidebarExpand = () => {
    setExpand(!isExpand);
  };

  if (user) {
    return (
      <Route
        exact
        path={props.path}
        render={(propsRoute) => {
          return (
            <Layout>
              <SidebarMenu isExpand={isExpand} />
              <LayoutMain>
                <div
                  className={`main_bgoverlay ${
                    isExpand ? "bgoverlay-show" : ""
                  }`}
                  onClick={handleSidebarExpand}
                />
                <LayoutHeader handleSidebarExpand={handleSidebarExpand} />
                <Layout.Content style={{ padding: "20px" }}>
                  <props.component {...propsRoute} />
                </Layout.Content>
              </LayoutMain>
            </Layout>
          );
        }}
      />
    );
  }
  return <Redirect to="/login" />;
};

export default AdminTemplate;
