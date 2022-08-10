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
      <TabPane tab="Tab 1" key="1" style={{ height: "500px" }}>
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2" style={{ height: "500px" }}>
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3" style={{ height: "500px" }}>
        Content of Tab Pane 3
      </TabPane>
      <TabPane tab="Tab 4" key="4" style={{ height: "500px" }}>
        Content of Tab Pane 4
      </TabPane>
      <TabPane tab="Tab 5" key="5" style={{ height: "500px" }}>
        Content of Tab Pane 5
      </TabPane>
      <TabPane tab="Tab 6" key="6" style={{ height: "500px" }}>
        Content of Tab Pane 6
      </TabPane>
      <TabPane tab="Tab 7" key="7" style={{ height: "500px" }}>
        Content of Tab Pane 7
      </TabPane>
      <TabPane tab="Tab 8" key="8" style={{ height: "500px" }}>
        Content of Tab Pane 8
      </TabPane>
      <TabPane tab="Tab 9" key="9" style={{ height: "500px" }}>
        Content of Tab Pane 9
      </TabPane>
      <TabPane tab="Tab 10" key="10" style={{ height: "500px" }}>
        Content of Tab Pane 10
      </TabPane>
      <TabPane tab="Tab 11" key="11" style={{ height: "500px" }}>
        Content of Tab Pane 11
      </TabPane>
      <TabPane tab="Tab 12" key="12" style={{ height: "500px" }}>
        Content of Tab Pane 12
      </TabPane>
      <TabPane tab="Tab 13" key="13" style={{ height: "500px" }}>
        Content of Tab Pane 13
      </TabPane>
    </Tabs>
  </StickyContainer>
);

export default Tab;

// "react": "^16.14.0",
// "react-dom": "^16.14.0",
// "react-scripts": "^4.0.0",
// "react-sticky": "latest"
