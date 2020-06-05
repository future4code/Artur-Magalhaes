import React from 'react';
import './App.css';
import styled from'styled-components';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

const AppDiv = styled.div`
  text-align: center;
`;

class App extends React.Component {
  state = {
    tela: 1
  }

  onClickProximaEtapa = () => {
    this.setState({
      tela: this.state.tela + 1
    })
  }

  render(){
    if(this.state.tela === 1){
      return (
        <AppDiv>
          <Etapa1 mudarTela={this.onClickProximaEtapa}/>
        </AppDiv>
      );
    }
    else if(this.state.tela === 2){
      return (
        <AppDiv>
          <Etapa2  mudarTela2={this.onClickProximaEtapa}/>
        </AppDiv>
      );
    }
    else if(this.state.tela == 3) {
      return (
        <AppDiv>
          <Etapa3 mudarTela3={this.onClickProximaEtapa}/>
        </AppDiv>
      );
    }
    else{
      return(
        <AppDiv>
          <Final />
        </AppDiv>
      )
    }
  }
}
export default App;
