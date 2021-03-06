import React from "react";

function Post(props) {
  return (
    <div className="post">
      <div className="img-thumb1">
        <img src="https://placeimg.com/200/150/tech" alt="dummy" />
      </div>
      <div className="content">
        <p className="title" onClick={() => props.goDetail(props.data.id)}>
          {props.data.title}
        </p>
        <p className="desc"> {props.data.body}</p>
        <button onClick={() => props.remove(props.data.id)}>Remove</button>
        <button onClick={() => props.update(props.data)}>Update</button>
      </div>
    </div>
  );
}

export default Post;
