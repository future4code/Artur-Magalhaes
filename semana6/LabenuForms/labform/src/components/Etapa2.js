import React from 'react'
import styled from 'styled-components'

const Labels = styled.label`
  display: block;
  margin: 5px;
`;

const Button = styled.button`
  margin: 10px;
`;


class Etapa2 extends React.Component{
  render(){
    return(
      <div>
        <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
        <div>
          <Labels>5. Por que você não terminou um curso de ?</Labels>
          <input type='text'/>
        </div>
        <div>
          <Labels>6. Qual sua idade?</Labels>
          <input type='text'/>
        </div>
        <Button onClick={this.props.mudarTela2}>Próxima Etapa</Button>
      </div>
    )
  }
}

export default Etapa2;