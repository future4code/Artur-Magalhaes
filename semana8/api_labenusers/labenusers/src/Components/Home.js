import React from 'react'
import axios from 'axios'
import style from 'styled-components'

const DivContent = style.div`
    border: 1px solid;
    margin: 0 auto;
    width: 50%;
    padding: 0px 30px;
    text-align: center;
`
const Ul = style.ul`
    display: flex;
    flex-direction: column;
`
const Li = style.li`
    display: flex;
    padding-bottom: 10px;
`
const DivList = style.div`
    width: 50%;
`
const Button = style.button`
    cursor: pointer;
    color: red;
`

const axiosConfig = {
    headers: {
        Authorization: 'artur-magalhaes-mello'
    }
}

class Home extends React.Component{
    state = {
        users: [],
    }

    componentDidMount = () => {
        this.showUsers()
    }

    showUsers = () => {
      axios
        .get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', 
            axiosConfig
        ).then (response => {
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
            axiosConfig
        ).then (response => {
            console.log(response)
            window.alert('Usuário deletado com sucesso. :)')
            this.showUsers()
        }).catch (erro => {
            console.log(erro)
        })
    }

    render() {
        return(
        <DivContent>
            <h1>Usuários Cadastrados</h1>
            <hr />
            <Ul>
            {this.state.users.length == 0 && <div>Carregando...</div>}
            {this.state.users.map(user => {
                return (
                  <Li key={user.id}>
                    <DivList>{user.name}</DivList>
                    <DivList>
                        <Button onClick={() => this.deleteUser(user.id)}>
                            X
                        </Button>
                    </DivList>
                  </Li>
                )
            })}
            </Ul>
        </DivContent>
        )
    }
}

export default Home;