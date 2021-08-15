import axios from "axios";
import { OnlineRoot, RootPath } from "./Config";

const Post = (path, root, data) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .post(`${root ? OnlineRoot : RootPath}/${path}`, this.state.formBlogPost)
      .then(
        (result) => {
          resolve(result);
        },
        (err) => {
          reject(err);
        }
      );
  });
  return promise;
};

export default Post;
