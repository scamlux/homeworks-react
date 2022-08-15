import { Component } from "react";
import Domain from "./components/domain";
import Input from "./components/input";
import styles from "./styles/style.module.scss";
export class App extends Component {
  state = {
    prefixs: ["https://", "http://"],
    suffixs: [".com", ".io", ".git", ".uz", "ru"],
    domainName: "",
    prefix: "https://",
    suffix: ".com",
  };
  handlePrefixChange = (e) => {
    this.setState({ prefix: e.target.value });
  };
  handleSuffixChange = (e) => {
    this.setState({ suffix: e.target.value });
  };
  handleInputChange = (e) => {
    this.setState({ domainName: e.target.value });
  };
  render() {
    const { suffix, domainName, prefix, suffixs, prefixs } = this.state;
    return (
      <div className={styles.app}>
        <Domain suffix={suffix} domainName={domainName} prefix={prefix} />
        <Input
          suffix={suffix}
          domainName={domainName}
          prefix={prefix}
          prefixs={prefixs}
          suffixs={suffixs}
          onPrefixChange={this.handlePrefixChange}
          onSuffixChange={this.handleSuffixChange}
          handleInputChange={this.handleInputChange}
        />
        <p>{"Created by : --scamlux--"}</p>
      </div>
    );
  }
}

export default App;
