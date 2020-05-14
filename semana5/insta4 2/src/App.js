import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    pessoas: [
      {
      nomeUsuario: "paulinha",
      fotoUsuario: "https://picsum.photos/50/50?1",
      fotoPost: "https://picsum.photos/200/150?1"
      },
      {  
      nomeUsuario: 'artur',
      fotoUsuario: 'https://picsum.photos/50/50?2',
      fotoPost: 'https://picsum.photos/200/150?2'
      },
      {
      nomeUsuario: 'maria',
      fotoUsuario: 'https://picsum.photos/50/50?3',
      fotoPost: 'https://picsum.photos/200/150?3'
      }
    ],

    valorInputNome: "",
    valorInputFotoUsuario: "",
    valorInputPost: ""
  };

  onChangeInputNome = event => {
    this.setState({valorInputNome: event.target.value})
  }

  onChangeInputFotoUsuario = event => {
    this.setState({valorInputFotoUsuario: event.target.value})
  }

  onChangeInputPost = event => {
    this.setState({valorInputPost: event.target.value})
  }

  onClickAddPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputPost
    }

    const posts = [novoPost, ...this.state.pessoas]

    this.setState({
      pessoas: posts,
      valorInputNome: "",
      valorInputFotoUsuario: "",
      valorInputPost: ""
    });
  };

  render() {
    const listaDeContas = this.state.pessoas.map(pessoa => {
      return(<Post nomeUsuario={pessoa.nomeUsuario} fotoUsuario={pessoa.fotoUsuario} fotoPost={pessoa.fotoPost}
         />)
    })
    return (
      <div className={'app-container'}>
        <div>
          <input 
          value={this.state.valorInputNome}
          onChange={this.onChangeInputNome}
          placeholder={"usuário"}
          />
          <input 
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder={"imagem do usuário"}
          />
          <input 
          value={this.state.valorInputPost}
          onChange={this.onChangeInputPost}
          placeholder={"post"}
          />
          <button onClick={this.onClickAddPost}>Postar</button>
        </div>
        <div>
          {listaDeContas}
        </div>
      </div>
    );
  }
}

export default App;
