import React from 'react';
import axios from 'axios';
import Login from './Components/Login';
import Home from './Components/Home';
import User from './Components/User';

const axiosConfig = {
  headers: {
      Authorization: 'artur-magalhaes-mello'
  }
}

class App extends React.Component {
  state = {
    page: 'SingUp',
    pagesHome: true,
    id: 0,
  }

  singUpPage = () => {
    this.setState({
      page: 'SingUp'
    })
  }
  homePage = () => {
    this.setState({
      page: 'homePage'
    })
  }
  changePage = () => {
    this.setState({
      pagesHome: !this.state.pagesHome
    })
  }
  changeId = (idUser) => {
    this.setState({
      id: idUser
    })
  }

  render() {
    if(this.state.page === 'SingUp'){
      return(
        <div>
          <button onClick={this.homePage}>Lista de usuários</button>
          <Login/>
        </div>
        )
    } else if (this.state.page === 'homePage') {
      return(
        <div>
          <button onClick={this.singUpPage}>Página de cadastro</button>
          {this.state.pagesHome ? <Home idUser={this.state.id}/> : <User />}
        </div>
      )
    }
  }
}

export default App;
