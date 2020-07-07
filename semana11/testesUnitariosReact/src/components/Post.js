import React from "react";

export const Post = props => {
  return (
    <div className={"post-container"} 
      data-testid="allPosts">
      <p data-testid="posts">{props.post.text}</p>
      <button
        onClick={() => props.toggleLike(props.post.id)}
        data-testid={"like-button"}
      >
        {props.post.liked ? "Descurtir" : "Curtir"}
      </button>
      <button
        title={props.post.text}
        data-testid="deletePost"
        onClick={() => props.deletePost(props.post.id)}>Apagar</button>
    </div>
  );
};
