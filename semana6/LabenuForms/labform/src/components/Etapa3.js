import React from 'react'
import styled from 'styled-components'

const Labels = styled.label`
  display: block;
  margin: 5px;
`;

const Button = styled.button`
  margin: 10px;
`;


class Etapa3 extends React.Component{
  render(){
    return(
        <div>
        <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
        <div>
            <Labels>5. Por que você não terminou um curso de graduação?</Labels>
            <input type='text'/>
        </div>
        <div>
            <Labels>6. Você fez algum curso complementar?</Labels>
            <select>
              <option>Nenhum</option>
              <option>Curso Técnico</option>
              <option>Curso de Inglês</option>
            </select>
        </div>
        <Button onClick={this.props.mudarTela3}>Próxima Etapa</Button>
        </div>
    );
  }
}

export default Etapa3;