import React, { Component, Fragment } from "react";
import YoutubeComponent from "./../../component/YoutubeComponent/YoutubeComponent";
import { Product } from "./../Product/Product";
import BlogPost from "./../BlogPost/BlogPost";

class Home extends Component {
  render() {
    return (
      <div>
        {/* <YoutubeComponent thumb="hallo 1" desc="desc 1" />
        <YoutubeComponent thumb="hallo 2" desc="desc 2" />
        <YoutubeComponent thumb="hallo 3" desc="desc 3" />
        <YoutubeComponent desc="desc 4" /> */}
        {/* <Product /> */}
        <BlogPost />
      </div>
    );
  }
}

export default Home;
