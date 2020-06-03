import React from 'react';
import Login from './Components/Login'
import Home from './Components/Home'

class App extends React.Component {
  state = {
    page: true
  }

  changePage = () => {
    this.setState({
      page: !this.state.page
    })
  }

  render() {
    if(this.state.page){
      return(
        <div>
          <button onClick={this.changePage}>Lista de usuários</button>
          <Login/>
        </div>
        )
    } else {
      return(
        <div>
          <button onClick={this.changePage}>Página de cadastro</button>
          <Home/>
        </div>
      )
    }
  }
}

export default App;
