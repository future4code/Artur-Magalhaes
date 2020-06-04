import React from 'react';
import axios from 'axios';
import Details from './components/Details';
import CEP from './components/Song';

class App extends React.Component {
  state = {
    historicalEvents: [],
    event: [],
    page: 'song',
  }
  componentDidMount = () => {
    this.getHistory()
  }

  getHistory = () => {
    axios.get("https://api.spacexdata.com/v3/history")
      .then(response => {
        console.log(response.data)
        this.setState({historicalEvents: response.data})
      }).catch(erro => {
        console.log(erro)
      })
  }

  onClickDetails = (event) => {
    this.setState({
      page: 'detail',
      event: event,
    })
  }

  onClickHistorical = () => {
    this.setState({
      page: 'historical',
    })
  }

  onClickBuscaCEP = () => {
    this.setState({
      page: 'cep'
    })
  }

  render(){
    switch(this.state.page) {
      case 'historical':
        return (
          <div className="App">
            <button onClick={this.onClickBuscaCEP}>Buscar Musica</button>
            <h1>Histórico</h1>
            <hr/>
            <ul>
              {this.state.historicalEvents.map(event => {
                return (
                  <li key={event.id} onClick={() => this.onClickDetails(event)}><strong>{event.title}</strong> - {event.event_date_utc}</li>
                  )
              })}
            </ul>
          </div>
        )
      case 'detail':
        return (
          <div>
            <button onClick={this.onClickHistorical}>Voltar</button>
            <Details event={this.state.event}/>
          </div>)
      case 'song':
        return(
          <div>
            <button onClick={this.onClickHistorical}>SpaceX</button>
            <CEP/>
          </div>
        )
      }
    }
}

export default App;
