import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeMarcadorBranco from '../../img/bookmark-branco.svg'
import iconeMarcadorPreto from '../../img/bookmark-preto.svg'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeCompartilhar from '../../img/share.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import { SecaoCompartilhar } from '../SecaoCompartilhar/SecaoCompartilhar'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvado: false,
    numeroSalvados: 0,
    compartilhar: false,
    numeroCompartilhamento: 0
  }

  onClickCurtida = () => {
    if (this.state.curtido === false) {
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.curtido + 1
      })
    }else{
      this.setState({
        curtido: !this.state.curtido,
        numeroCurtidas: this.state.curtido - 1
      })
    }
  }
  
  onClickSalvar = () => {
    if (this.state.salvado === false) {
      this.setState({
        salvado: !this.state.salvado,
        numeroSalvados: this.state.numeroSalvados + 1
      })
    }
    else{
      this.setState({
        salvado: !this.state.salvado,
        numeroSalvados: this.state.salvado - 1
      })
    }
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhar: !this.state.compartilhar
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }
  aoEnviarCompartilhar = () => {
    this.setState({
      compartilhar: false,
      numeroCompartilhamento: this.state.numeroCompartilhamento + 1
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeSalvar
    if(this.state.salvado) {
      iconeSalvar = iconeMarcadorPreto
    } else {
      iconeSalvar = iconeMarcadorBranco
    }

    let componenteCompartilhar

    if (this.state.compartilhar) {
      componenteCompartilhar = <SecaoCompartilhar aoEnviar={this.aoEnviarCompartilhar}/>
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />
        <IconeComContador
          icone={iconeSalvar}
          onClickIcone={this.onClickSalvar}
          valorContador={this.state.numeroSalvados}
        />
        <IconeComContador
        icone={iconeCompartilhar}
        onClickIcone={this.onClickCompartilhar}
        valorContador={this.state.numeroCompartilhamento}
      />
        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteComentario}
      {componenteCompartilhar}
    </div>
  }
}

export default Post