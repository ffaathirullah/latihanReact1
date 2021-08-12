import React, { Component, Fragment } from "react";
import Post from "./../../component/Post/Post";
import axios from "axios";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    },
  };

  getPostAPI = () => {
    axios.get("  http://localhost:3004/posts").then((result) => {
      this.setState({
        post: result.data,
      });
    });
  };

  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      this.getPostAPI();
    });
  };
  handleFormChange = (event) => {
    console.log("form change", event.target);

    let formBlogPostNew = { ...this.state.formBlogPost };
    formBlogPostNew[event.target.name] = event.target.value;

    this.setState(
      {
        formBlogPost: formBlogPostNew,
      },
      () => {
        console.log("value object from blog post :", this.state.formBlogPost);
      }
    );
  };
  componentDidMount() {
    this.getPostAPI();
  }
  render() {
    return (
      <div>
        <Fragment>
          <p>blog post</p>
          <div className="form-add-post">
            <label>
              <input
                type="text"
                name="title"
                placeholder="add title"
                onChange={this.handleFormChange}
              />
              <label htmlFor="body">Blog Content</label>
              <textarea
                name="body"
                id="body"
                cols="30"
                rows="10"
                placeholder="add text"
                onChange={this.handleFormChange}
              ></textarea>
              <button>Simpan</button>
            </label>
          </div>
          {this.state.post.map((post) => {
            return (
              <Post key={post.id} data={post} remove={this.handleRemove} />
            );
          })}
        </Fragment>
      </div>
    );
  }
}

export default BlogPost;
