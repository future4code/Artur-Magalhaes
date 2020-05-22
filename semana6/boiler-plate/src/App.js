import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [{
        id: Date.now(),
        texto: "trabalho",
        completa: true
      }
      ],
      inputValue: '',
      filter: ''
    }

  componentDidUpdate() {
    const novaTarefa = this.state;

    localStorage.setItem("itens", JSON.stringify(novaTarefa.tarefas));
  };

  componentDidMount() {
    const itensNoLocalStorage = localStorage.getItem("itens");

    const itemObjeto = JSON.parse(itensNoLocalStorage);

    console.log(itemObjeto);

  };

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  criaTarefa = () => {
    this.setState({
      inputValue: this.state.inputValue,
    })

    const tarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    }
    this.setState({
      tarefas: [...this.state.tarefas, tarefa]
    })
    
    this.setState({
      inputValue: ""
    })
  }

  selectTarefa = (id) => {
    const alterarTarefa = this.state.tarefas.map(tarefa => {
      if (tarefa.id === id){
        return {
          ...tarefa,
          completa: !tarefa.completa
        }
      }
      return tarefa
    });
    this.setState({
      tarefas: alterarTarefa
    })
  }

  deleteTarefa = (id) => {
    const deleteTarefa = this.state.tarefas.filter(tarefa => {
      if(tarefa.id !== id){
        return tarefa
      }
    })
    this.setState({
      tarefas: deleteTarefa
    })
  }

  onChangeFilter = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  render() {
    const listaFiltrada = this.state.tarefas
      .filter(tarefa => {
        switch (this.state.filter) {
          case 'pendentes':
            return !tarefa.completa
          case 'completas':
            return tarefa.completa
          default:
            return true
        }
      })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} 
          onChange={this.onChangeInput}
          onKeyPress={e => {
            if(e.key === 'Enter'){
              this.criaTarefa()
            }
          }}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
                onDoubleClick={() => this.deleteTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
