import React from "react";
import users from "../data/users.json";
import "../AppContainer/AppContainer.css";

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";

const { Meta } = Card;

export const AppContainer = () => {
  return (
    <div className="app_container">
      {users.map((item, index) => {
        return (
          <div className="card_container">
            <Card
              style={{ width: 200 }}
              cover={<img alt="example" src={item.image} />}
            >
              <Meta
                avatar={<Avatar src={item.image} />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </div>
        );
      })}
    </div>
  );
};
