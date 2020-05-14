import React, {Component} from 'react'
import '../SecaoComentario/SecaoComentario.css'

export class SecaoCompartilhar extends Component{
    state = {
        mensagem : ''
    }

    render(){
        return <div className={'comment-container'}>
            <input className={'input-comentario'}
				placeholder={'mensagem'}
				value={this.mensagem}
				onChange={this.onChangeMensagem}/>
            <button onClick={this.props.aoEnviar}>Facebook</button>
            <button onClick={this.props.aoEnviar}>Instagram</button>
            <button onClick={this.props.aoEnviar}>Twitter</button>
        </div>
    }
}