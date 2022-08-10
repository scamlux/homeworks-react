import React from "react";
import "antd/dist/antd.css";
import tabStyles from "./tab.module.scss";
import { Tabs } from "antd";

import { Sticky, StickyContainer } from "react-sticky";
const { TabPane } = Tabs;

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar
        {...props}
        className={tabStyles["site-custom-tab-bar"]}
        style={{ ...style }}
      />
    )}
  </Sticky>
);

const Tab = () => (
  <StickyContainer>
    <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
      <TabPane tab="Tab 1" key="1" style={{ height: 500 }}>
        1-chi TABdan Salom!
      </TabPane>
      <TabPane tab="Tab 2" key="2" style={{ height: 500 }}>
        2-chi TABdan Salom!
      </TabPane>
      <TabPane tab="Tab 3" key="3" style={{ height: 500 }}>
        3-chi TABdan Salom!
      </TabPane>
      <TabPane tab="Tab 4" key="4" style={{ height: 500 }}>
        4-chi TABdan Salom!
      </TabPane>
      <TabPane tab="Tab 5" key="5" style={{ height: 500 }}>
        5-chi TABdan Salom!
      </TabPane>
      <TabPane tab="Tab 6" key="6" style={{ height: 500 }}>
        6-chi TABdan Salom!
      </TabPane>
      <TabPane tab="Tab 7" key="7" style={{ height: 500 }}>
        7-chi TABdan Salom!
      </TabPane>
      <TabPane tab="Tab 8" key="8" style={{ height: 500 }}>
        8-chi TABdan Salom!
      </TabPane>
      <TabPane tab="Tab 9" key="9" style={{ height: 500 }}>
        9-chi TABdan Salom!
      </TabPane>
      <TabPane tab="Tab 10" key="10" style={{ height: 500 }}>
        10-chi TABdan Salom!
      </TabPane>
      <TabPane tab="Tab 11" key="11" style={{ height: 500 }}>
        11-chi TABdan Salom!
      </TabPane>
      <TabPane tab="Tab 12" key="12" style={{ height: 500 }}>
        12-chi TABdan Salom!
      </TabPane>
    </Tabs>
  </StickyContainer>
);

export default Tab;

// "react": "^16.14.0",
// "react-dom": "^16.14.0",
// "react-scripts": "^4.0.0",
// "react-sticky": "latest"
