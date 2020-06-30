import React, { useState } from "react";
import "./App.css";
import { Post } from "./components/Post";

const App = () => {
  const [postsList, setPostsList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputVazio, setInputVazio] = useState("")

  const onChangeInput = event => {
    setInputValue(event.target.value);
  };

  const addPost = () => {
    if(inputValue !== ''){
      // Adiciona um post à lista
      const newPost = {
        id: Date.now(),
        text: inputValue,
        liked: false
      };

      const newPostsList = [newPost, ...postsList];

      setPostsList(newPostsList);
      
      //Limpar input
      setInputValue('');
      setInputVazio(false)
    }
    else{
      setInputVazio(true)
    }
  };

  const deletePost = postId => {
    // Apaga um post da lista
    const newPostsList = postsList.filter(post => {
      return postId !== post.id;
    });

    setPostsList(newPostsList);
  };

  const toggleLike = postId => {
    // Altera o status de curtida de um post da lista
    const newPostsList = postsList.map(post => {
      if (postId === post.id) {
        const novoPost = {
          ...post,
          liked: !post.liked
        };
        return novoPost;
      } else {
        return post;
      }
    });

    setPostsList(newPostsList);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          onChange={onChangeInput}
          value={inputValue}
          placeholder={"Novo post"}
        />
        <button
          data-testid="btnInput"
          onClick={addPost}>Adicionar</button>
      </div>
      {postsList.length === 0 && 
        <h3 data-testid="zeroPost">Nenhum Post</h3>}
      {postsList.length > 0 && <h5 data-testid="quantidade-posts">Quantidade de Posts: {postsList.length}</h5>}
      {postsList.length > 0 && postsList.map(post => {
        return (
          <Post
            key={post.id}
            post={post}
            toggleLike={toggleLike}
            deletePost={deletePost}
          />
        );
      })}
    </div>
  );
};

export default App;
