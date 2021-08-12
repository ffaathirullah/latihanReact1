import React, { Component, Fragment } from "react";
import Post from "./../../component/Post/Post";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
  };
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({
    //       post: json,
    //     });
    //   });
    axios.get("  http://localhost:3004/posts").then((result) => {
      this.setState({
        post: result.data,
      });
    });
  }
  render() {
    return (
      <div>
        <Fragment>
          <p>blog post</p>
          {this.state.post.map((post) => {
            return <Post key={post.id} title={post.title} desc={post.body} />;
          })}
        </Fragment>
      </div>
    );
  }
}

export default BlogPost;
