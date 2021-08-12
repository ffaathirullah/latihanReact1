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
    axios
      .get(`http://localhost:3004/posts?_sort=id&_order=desc`)
      .then((result) => {
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
    let timestamp = new Date().getTime();
    let formBlogPostNew = { ...this.state.formBlogPost };
    formBlogPostNew[event.target.name] = event.target.value;
    formBlogPostNew["id"] = timestamp;
    this.setState({
      formBlogPost: formBlogPostNew,
    });
  };

  postDataToAPI = () => {
    axios.post("http://localhost:3004/posts/", this.state.formBlogPost).then(
      (res) => {
        this.getPostAPI();
      },
      (err) => {}
    );
  };
  handleSubmit = () => {
    this.postDataToAPI();
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
              <button onClick={this.handleSubmit}>Simpan</button>
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
