import React, { useState, useEffect } from 'react';
import { useForm } from './hooks/useForm';
import api from './service/api';
import './App.css';

function App() {
  const days = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState('');
  const [inputUpdate, setInputUpdate] = useState(false);
  const [checkCreateTask, setCheckCreateTask] = useState('')
  const { form, handleForm } = useForm({
    text: '',
    day: '',
  });

  useEffect(() => {
    api.get('')
      .then(response => {
      setTasks(response.data);
    }).catch(error => { 
    })
  },[tasks]);

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    handleForm(name, value);
  }

  const createTask = (event) => {
    event.preventDefault();
    if(form.text !== ''){
      api.post('', form)
        .then( response => {
          setCheckCreateTask(true)
          form.text = '';
          form.day = '';
          setTimeout(() => {
            setCheckCreateTask('');
          }, 1000);
        })
    } else {
      setCheckCreateTask(false)
      setTimeout(() => {
        setCheckCreateTask('');
      }, 1000);
    }
  }

  const deleteTask = (id) => {
    api.delete(`/${id}`)
  }

  const componentUpdateTask = (id) => {
    setInputUpdate(true)
    setId(id)
  }

  const updateTask = (event) => {
    event.preventDefault()
    api.put(`${id}`, form)
    setInputUpdate(false)
  }

  const filterDay = (task) => {
    return(
      <div key={task.id}
        data-testid="task">
        {task.text}
        <div>
          <button 
            title={`delete${task.id}`}
            onClick={() => deleteTask(task.id)}>Deletar</button>
          <button 
            title={`edit${task.id}`}
            onClick={() => componentUpdateTask(task.id)}>Editar</button>
        </div>
      </div>)
  }

  return (
    <div className="App">
      <form 
        data-testid="form"
        onSubmit={createTask}>
        <input 
          className="App-form"
          name="text"
          placeholder="Tarefa"
          onChange={onChangeInput}
          value={form.text}
          pattern="[A-Z][a-z ]{1,}" />
        <select 
          data-testid="select"
          name="day"
          value={form.day}
          onChange={onChangeInput}>
          <option 
            value="" 
            required />
          {days.map(day => {
            return <option
              value={day}
              title={day}>{day}</option>
          })}
        </select>
        <button className="App-btn">Submit</button>
      </form>
      {checkCreateTask === false &&
        <h4 data-testid="invalid">Texto Inválido</h4>}
      {checkCreateTask === true &&
        <h4 data-testid="valid">Tarefa Criada</h4>}
      <div className="App-tasks">
        <div className="App-task">
          <h4>Segunda</h4>
          {tasks.map(task => {
            if (task.day === 'Segunda'){
              return (filterDay(task));
            }})
        }</div>
        <div className="App-task">
          <h4>Terça</h4>
          {tasks.map(task => {
            if (task.day === 'Terça'){
              return (filterDay(task));
            }})
        }</div>
        <div className="App-task">
          <h4>Quarta</h4>
          {tasks.map(task => {
            if (task.day === 'Quarta'){
              return (filterDay(task));
            }})
        }</div>
        <div className="App-task">
          <h4>Quinta</h4>
          {tasks.map(task => {
            if (task.day === 'Quinta'){
              return (filterDay(task));
            }})
        }</div>
        <div className="App-task">
          <h4>Sexta</h4>
          {tasks.map(task => {
            if (task.day === 'Sexta'){
              return (filterDay(task));
            }})
        }</div>
        <div className="App-task">
          <h4>Sábado</h4>
          {tasks.map(task => {
            if (task.day === 'Sábado'){
              return (filterDay(task));
            }})
        }</div>
        <div className="App-task">
        <h4>Domingo</h4>
        {tasks.map(task => {
          if (task.day === 'Domingo'){
            return (filterDay(task));
          }})
      }
      </div>
      </div>
      {inputUpdate && 
        <form 
          data-testid="form"
          onSubmit={updateTask}>
          <input 
            className="App-form"
            name="text"
            placeholder="Atualizar Tarefa"
            onChange={onChangeInput}
            value={form.text}
            pattern="[A-Z][a-z ]{1,}" />
          <select 
            data-testid="selectUpdate"
            name="day"
            value={form.day}
            onChange={onChangeInput}>
            <option 
              value="" 
              required />
            {days.map(day => {
              return <option
                value={day}
                title={`update${day}`}>{day}</option>
            })}
          </select>
          <button 
            className="App-btn"
            onClick={() => setInputUpdate(false)}>Cancelar</button>
          <button
            className="App-btn">Atualizar</button>
        </form>}
    </div>
  );
}

export default App;