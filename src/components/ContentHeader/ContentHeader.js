import { Breadcrumb } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const ContentHeader = ({ data = [] }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      {data.length > 0 && <h2>{data[data.length - 1]?.title}</h2>}
      {data.length > 1 && (
        <Breadcrumb>
          {data.map((item, index) => {
            return (
              <Breadcrumb.Item key={index}>
                {item.src === "" ? (
                  item.title
                ) : (
                  <Link to={item.src}>{item.title}</Link>
                )}
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      )}
    </div>
  );
};

export default ContentHeader;
