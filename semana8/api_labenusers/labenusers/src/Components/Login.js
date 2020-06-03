import React from 'react'
import axios from 'axios'
import style from 'styled-components'

const Div = style.div`
  display: block;
  width: 20%;
  margin: auto;
  padding: 50px;
  border: 1px solid;
`
const Label = style.label`
    font-size: 18px;
`
const Input = style.input`
    margin: auto;
    display: flex;
    width: 270px;
`

const axiosConfig = {
    headers: {
        Authorization: 'artur-magalhaes-mello'
    }
}

class Login extends React.Component{
    state = {
        name: '',
        email: '',
    }

    registerUser = () => {
        const data = {
            name: this.state.name,
            email: this.state.email,
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', 
            data,
            axiosConfig,
        ).then (response => {
            window.alert('Usuário salvo com sucesso!');
            this.setState({
                name: '',
                email: '',
            })
        }).catch (erro => {
            window.alert('Problema ao criar usuário. :(')
            console.log(erro)
        });
    }

    onChangeinputName = event => {
        this.setState({
            name: event.target.value
        })
    }
    onChangeinputEmail = event => {
        this.setState({
            email: event.target.value
        })
    }

    render(){
        return(
            <Div>
                <div>
                    <Label>Nome: </Label>
                    <Input type='text' 
                        onChange={this.onChangeinputName} 
                        value={this.state.name}/>
                </div>
                <div>
                    <Label>Email: </Label>
                    <Input type='text' 
                        onChange={this.onChangeinputEmail} 
                        value={this.state.email}/>
                </div>
                <button onClick={this.registerUser}>Cadastrar</button>
            </Div>
        )
    }
}

export default Login;