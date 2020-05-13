import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50?1'}
          fotoPost={'https://picsum.photos/200/150?1'}
        />
        <Post
          nomeUsuario={'artur'}
          fotoUsuario={'https://picsum.photos/50/50?2'}
          fotoPost={'https://picsum.photos/200/150?2'}
        />
        <Post
          nomeUsuario={'maria'}
          fotoUsuario={'https://picsum.photos/50/50?3'}
          fotoPost={'https://picsum.photos/200/150?3'}
        />
      </div>
    );
  }
}

export default App;
