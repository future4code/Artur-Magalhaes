import React from 'react'
import axios from 'axios'
import style from 'styled-components'
import User from './User'

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
        page: true,
        user: '',
    }

    changePage = () =>{
        this.setState({
            page: !this.state.page
        })
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
      const confirm = window.confirm('Tem certeza que deseja deletar o usuário?')
      if(confirm){
        axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, 
                axiosConfig
            ).then (response => {
                console.log(response)
                window.alert('Usuário deletado com sucesso.')
                this.showUsers()
            }).catch (erro => {
                console.log(erro)
            })
      } else {
        window.alert('Usuário não foi deletado. :)')
      }
    }

    detailUser = (idUser) => {
        axios
          .get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUser}`, 
              axiosConfig
          ).then (response => {
              console.log(response.data)
              this.setState({
                page: false,
                user: response.data,
              })
          }).catch (erro => {
              console.log(erro)
          })
    }

    render() {
        if(this.state.page){
            return(
            <DivContent>
                <h1>Usuários Cadastrados</h1>
                <hr />
                <Ul>
                {this.state.users.length == 0 && <div>Carregando...</div>}
                {this.state.users.map(user => {
                    return (
                    <Li key={user.id}>
                        <DivList onClick={() => this.detailUser(user.id)}>{user.name}</DivList>
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
        } else {
            return(
                <div>
                    <button onClick={this.changePage}>Voltar</button>
                    <User user={this.state.user}/>
                </div>
            )
        }
    }
}

export default Home;