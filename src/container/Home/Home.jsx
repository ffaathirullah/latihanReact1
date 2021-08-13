import React, { Component, Fragment } from "react";
import YoutubeComponent from "./../../component/YoutubeComponent/YoutubeComponent";
import { Product } from "./../Product/Product";
import BlogPost from "./../BlogPost/BlogPost";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DetailPost from "./../BlogPost/DetailPost/DetailPost";
import { useHistory } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Router>
          {/* <YoutubeComponent thumb="hallo 1" desc="desc 1" />
          <YoutubeComponent thumb="hallo 2" desc="desc 2" />
          <YoutubeComponent thumb="hallo 3" desc="desc 3" />
          <YoutubeComponent desc="desc 4" />
          <Product />
          <BlogPost /> */}
          <Fragment>
            <div>
              <Link to="/">Home</Link>
              <Link to="/product">Home</Link>
              <Link to="/blog">Blog</Link>
            </div>
          </Fragment>
          <Route path="/" exact component={YoutubeComponent} />
          <Route path="/detail/:postId" component={DetailPost} />
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/blog">
            <BlogPost />
          </Route>
        </Router>
      </div>
    );
  }
}

export default Home;
