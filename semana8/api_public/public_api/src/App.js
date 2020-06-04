import React from 'react';
import axios from 'axios';
import Details from './components/Details';

class App extends React.Component {
  state = {
    historicalEvents: [],
    idEvent: [],
    page: true,
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
      page: !this.state.page,
      event: event,
    })
  }

  render(){
    if(this.state.page) {
      return (
        <div className="App">
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
      )} else {
        return (
          <div>
            <button onClick={this.onClickDetails}>Voltar</button>
            <Details event={this.state.event}/>
          </div>)
      }
    }
}

export default App;
