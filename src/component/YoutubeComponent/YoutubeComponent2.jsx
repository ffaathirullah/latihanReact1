import React, { Component } from "react";
import { GlobalConsumer } from "./../../context/context";

class YoutubeComponent2 extends Component {
  render() {
    return (
      <div>
        <p> {this.props.state.totalOrder}</p>
      </div>
    );
  }
}
export default GlobalConsumer(YoutubeComponent2);
