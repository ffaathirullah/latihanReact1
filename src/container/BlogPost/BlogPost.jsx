import React, { Component, Fragment } from "react";
import Post from "./../../component/Post/Post";
import axios from "axios";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import API from "./../../services/index";

class BlogPost extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    },
    isUpdate: false,
    comments: [],
  };

  handleRemove = (data) => {
    API.deleteNewsBlog(data).then((res) => {
      this.getPostAPI();
    });
  };

  handleUpdate = (data) => {
    console.log(data);
    this.setState({
      formBlogPost: data,
      isUpdate: true,
    });
  };

  putDataToAPI = () => {
    API.putNewsBlog(this.state.formBlogPost, this.state.formBlogPost.id).then(
      (result) => {
        this.getPostAPI();
        this.setState({
          isUpdate: false,
          formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
          },
        });
      }
    );
  };

  handleFormChange = (event) => {
    let timestamp = new Date().getTime();
    let formBlogPostNew = { ...this.state.formBlogPost };
    formBlogPostNew[event.target.name] = event.target.value;
    if (!this.state.isUpdate) {
      formBlogPostNew["id"] = timestamp;
    }
    this.setState({
      formBlogPost: formBlogPostNew,
    });
  };
  getPostAPI = () => {
    API.getNewsBlog().then((result) => {
      this.setState({
        post: result,
      });
    });
    API.getComments().then((result) => {
      this.setState({
        comments: result,
      });
    });
  };
  postDataToAPI = () => {
    API.postNewsBlog(this.state.formBlogPost).then((result) => {
      this.getPostAPI();
      this.setState({
        formBlogPost: {
          id: 1,
          title: "",
          body: "",
          userId: 1,
        },
      });
    });
  };
  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPI();
    } else {
      this.postDataToAPI();
    }
  };

  handleDetail = (id) => {
    const { history } = this.props;
    history.push(`/detail/${id}`);
  };

  componentDidMount() {
    this.getPostAPI();
  }
  render() {
    return (
      <div>
        <Fragment>
          <p>blog post</p>
          <p>{this.props.order}</p>
          <div className="form-add-post">
            <label>
              <input
                type="text"
                name="title"
                placeholder="add title"
                onChange={this.handleFormChange}
                value={this.state.formBlogPost.title}
              />
              <label htmlFor="body">Blog Content</label>
              <textarea
                name="body"
                id="body"
                cols="30"
                rows="10"
                placeholder="add text"
                onChange={this.handleFormChange}
                value={this.state.formBlogPost.body}
              ></textarea>
              <button onClick={this.handleSubmit}>Simpan</button>
            </label>
          </div>
          {/* {this.state.comments.map((comment) => {
            return (
              <p>
                {comment.name} - {comment.email}
              </p>
            );
          })} */}
          {this.state.post.map((post) => {
            return (
              <Post
                key={post.id}
                data={post}
                remove={this.handleRemove}
                update={this.handleUpdate}
                goDetail={this.handleDetail}
              />
            );
          })}
        </Fragment>
      </div>
    );
  }
}

export default BlogPost;
