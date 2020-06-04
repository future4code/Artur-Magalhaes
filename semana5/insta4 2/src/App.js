import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const DivPrincipal = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  `

const Input = styled.input `
display: block;
width: 300px
`

const Botao = styled.button `
display: block;
width: 304px
`

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
      <DivPrincipal>
        <div>
          <Input 
          value={this.state.valorInputNome}
          onChange={this.onChangeInputNome}
          placeholder={"usuário"}
          />
          <Input 
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder={"URL imagem do usuário"}
          />
          <Input 
          value={this.state.valorInputPost}
          onChange={this.onChangeInputPost}
          placeholder={"URL imagem do post"}
          />
          <Botao onClick={this.onClickAddPost}>Postar</Botao>
        </div>
        <div>
          {listaDeContas}
        </div>
      </DivPrincipal>
    );
  }
}

export default App;
