import React from 'react'
import axios from 'axios'

class Home extends React.Component{
    state = {
        users: [],
    }

    componentDidMount = () => {
        this.showUsers()
    }
    
    componentDidUpdate = () => {
        this.showUsers()
    }

    showUsers = () => {
      axios
        .get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', 
        {
            headers: {
                Authorization: 'artur-magalhaes-mello'
            }
        }).then (response => {
            console.log(response.data)
            this.setState({
                users: response.data,
            })
        }).catch (erro => {
            console.log(erro)
        })
    }

    deleteUser = (id) => {
      axios
        .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, 
        {
            headers: {
                Authorization: 'artur-magalhaes-mello'
            },
        }).then (response => {
            console.log(response)
            window.alert('Usuário deletado com sucesso. :)')
        }).catch (erro => {
            console.log(erro)
        })
    }

    render() {
        return(
        <div>
            <h1>Usuários Cadastrados</h1>
            {this.state.users.map(user => {
                return (<p key={user.id}>{user.name}
                    <button onClick={() => this.deleteUser(user.id)}>
                        X
                    </button>
                  </p>
                )
            })}
        </div>
        )
    }
}

export default Home;