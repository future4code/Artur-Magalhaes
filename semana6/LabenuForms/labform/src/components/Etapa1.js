import React from 'react';
import styled from 'styled-components'

const Labels = styled.label`
  display: block;
  margin: 5px;
`;

const Button = styled.button`
  margin: 10px;
`;

class Etapa1 extends React.Component {

  render(){
    return(
        <div>
          <h2>ETAPA 1 - DADOS GERAIS</h2>
          <div>
            <Labels>1. Qual o seu nome?</Labels>
            <input type='text'/>
          </div>
          <div>
            <Labels>2. Qual sua idade?</Labels>
            <input type='text'/>
          </div>
          <div>
            <Labels>3. Qual seu email?</Labels>
            <input type='text'/>
          </div>
          <div>
            <Labels>1. Qual a sua escolaridade?</Labels>
            <select>
                <option value="medIncompleto">Ensino Médio Incompleto</option>
                <option value="medCompleto">Ensino Médio Completo</option>
                <option value="supIncompleto">Ensino Superior Incompleto</option>
                <option value="supCompleto">Ensino Superior Completo</option>
            </select>
          </div>
          <Button onClick={this.props.mudarTela}>Próxima Etapa</Button>
        </div>
    );
  }

}

export default Etapa1;