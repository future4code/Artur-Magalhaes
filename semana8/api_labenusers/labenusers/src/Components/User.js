import React from 'react'
import axios from 'axios'
import style from 'styled-components'

const Button = style.button`
    cursor: pointer;
    color: red;
`

const axiosConfig = {
    headers: {
        Authorization: 'artur-magalhaes-mello'
    }
}

const deleteUser = (id) => {
    const confirm = window.confirm('Tem certeza que deseja deletar o usuário?')
    if(confirm){
      axios
          .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, 
              axiosConfig
          ).then (response => {
              console.log(response)
              window.alert('Usuário deletado com sucesso.')
          }).catch (erro => {
              console.log(erro)
          })
    } else {
      window.alert('Usuário não foi deletado. :)')
    }
}

const editUser = (id) => {
    const data = {
        name: name,
        email: email,
    }
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, 
        data, 
        axiosConfig).then(response => {
            window.alert(
                `${name} - ${email}`
            )
            name = ''
            email = ''
        }).catch(error => {
            console.log(error)
        })
}

let inputEdit = false
let name = ''
let email = ''


const inputEditar = () => {
    inputEdit = !inputEdit
    console.log(inputEdit)
}
/*
if (inputEdit === true) {
    inputArea = `<div><input type="text" placeholder="Usuário" /><input type="email" placeholder="email" /></div>`
}
console.log(inputArea)
*/

const onChangeName = (event) => {
    name = event.target.value
}

const onChangeEmail = (event) => {
    email = event.target.value
}

function User (props) {
    const { user } = props

      return(
        <div>
            {user.name} - {user.email}
            <Button onClick={() => deleteUser(user.id)}>
                X
            </Button>
            <div>
                <input type="text" placeholder="Usuário" onChange={onChangeName}/>
                <input type="email" placeholder="email" onChange={onChangeEmail}/>
                <button onClick={() => editUser(user.id)}>Atualizar</button>
            </div>
        </div>
      )
}

export default User;