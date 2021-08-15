import React, { Component } from "react";
import axios from "axios";
import Post from "./Post";
import Get from "./Get";
import Put from "./Put";
import Delete from "./Delete";

const getNewsBlog = () => Get("posts?_sort=id&_order=desc", false);
const getComments = () => Get("comments", true);

//Post
const postNewsBlog = (data) => Post("posts", false, data);

//Put
const putNewsBlog = (data, id) => Put(`posts/${id}`, false, data);

//Delete
const deleteNewsBlog = (data) => Delete(`posts/${data}`, false);

const API = {
  postNewsBlog,
  getNewsBlog,
  getComments,
  putNewsBlog,
  deleteNewsBlog,
};

export default API;
