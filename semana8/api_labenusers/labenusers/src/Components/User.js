import React from 'react'
import axios from 'axios'

const axiosConfig = {
    headers: {
        Authorization: 'artur-magalhaes-mello'
    }
}

class User extends React.Component {
    detailUser = (idUser) => {
        axios
          .get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUser}`, 
              axiosConfig
          ).then (response => {
              console.log(response.data)
          }).catch (erro => {
              console.log(erro)
          })
    }
    render() {
      return(
        <div>
            {this.detailUser()}
        </div>
      )
    }
}

export default User;