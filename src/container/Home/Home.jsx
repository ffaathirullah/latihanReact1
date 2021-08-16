import React, { Component, Fragment, createContext } from "react";
import YoutubeComponent from "./../../component/YoutubeComponent/YoutubeComponent";
import YoutubeComponent2 from "./../../component/YoutubeComponent/YoutubeComponent2";
import BlogPost from "./../BlogPost/BlogPost";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DetailPost from "./../BlogPost/DetailPost/DetailPost";
import { useHistory } from "react-router-dom";
import Product from "./../Product/Product";
import GlobalProvider from "./../../context/context";
import Hooks from "./../Hooks/Hooks";

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
              <Link to="/hooks">Hooks</Link>
            </div>
            <Route path="/" exact component={YoutubeComponent2} />
            <Route path="/hooks" exact component={Hooks} />
            <Route path="/detail/:postId" component={DetailPost} />
            <Route path="/product">
              <Product />
            </Route>
            <Route path="/blog">
              <BlogPost />
            </Route>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default GlobalProvider(Home);
