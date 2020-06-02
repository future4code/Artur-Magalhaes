import React from 'react';
import Login from './Components/Login'
import Home from './Components/Home'
import style from 'styled-components'

const Div = style.div`
  display: block;
  width: 20%;
  margin: auto;
  padding: 50px;
  border: 1px solid;
`

class App extends React.Component {
  state = {
    login: true
  }

  alterarConteudo = () => {
    this.setState({
      login: !this.state.login
    })
  }

  render() {
    if(this.state.login){
      return(
        <>
          <button onClick={this.alterarConteudo}>Lista de usuários</button>
          <Div>
            <Login></Login>
          </Div>
        </>
        )
    } else {
      return(
        <div>
          <button onClick={this.alterarConteudo}>Página de cadastro</button>
          <Home></Home>
        </div>
      )
    }
  }
}

export default App;
