import React, { Component } from "react";
import axios from "axios";

export default class DetailPost extends Component {
  state = {
    title: "",
    body: "",
  };

  componentDidMount() {
    const id = this.props.match.params.postId;
    axios.get(`http://localhost:3004/posts/${id}`).then((res) => {
      let post = res.data;
      this.setState({
        title: res.data.title,
        body: res.data.body,
      });
    });
  }
  render() {
    return (
      <div>
        <p>{this.state.title}</p>
        <p>{this.state.body}</p>
      </div>
    );
  }
}
