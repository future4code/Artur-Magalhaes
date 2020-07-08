import React from 'react';
import { render, fireEvent, wait, getByTitle, getByTestId } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
//import "@testing-library/jest-dom/extend-expect";
import App from './App';
import api from '../src/service/api'

api.get = jest.fn().mockResolvedValue({data: []})
api.post = jest.fn().mockResolvedValue()
api.delete = jest.fn().mockResolvedValue()

//Os outros testes já passam pelo input e select
test.skip('input and select', async () => {
  const { getByTestId, getByPlaceholderText, getByTitle } = render(<App />);
  const inputElement = getByPlaceholderText(/Tarefa/i);
  userEvent.type(inputElement, {target: {value: 'Limpar a casa'}});
  expect(inputElement).toBeInTheDocument(/Limpar a casa/i);

  const select = getByTestId(/select/i)
  userEvent.selectOptions(select, getByTitle('Sexta').value)
  await wait(() => expect(select).toHaveValue('Sexta'))
});

test('criar tarefa', async () => {
  //if true
  //axios.post = jest.fn().mockResolvedValue()

  const { getByPlaceholderText, getByTestId, getByText, getByTitle } = render (<App />);
  const inputElement = getByPlaceholderText(/tarefa/i);
  await userEvent.type(inputElement, 'Tarefa Teste');
  expect(inputElement).toBeInTheDocument('Tarefa Teste');
  
  const select = getByTestId(/select/i);
  const option = getByTitle(/Sábado/)
  await userEvent.selectOptions(getByTestId(/select/i), getByTitle(/Domingo/i).value);
  expect(select).toHaveValue('Domingo');

  const buttonForm = getByTestId(/form/);
  fireEvent.submit(buttonForm)

  //#####  AXIOS POST APÓS CLICAR NO BOTÃO SUBMIT  #####
  expect(api.post).toHaveBeenCalledTimes(1);

})

test('Criar tarefa sem texto', async () => {
  //if false
  const { getByPlaceholderText, getByTestId, getByText, getByTitle } = render (<App />);
  const inputElementFalse = getByPlaceholderText(/tarefa/i);
  await userEvent.type(inputElementFalse, {target: {value: ''}});
  expect(inputElementFalse.value).toBe('');
  
  const selectFalse = getByTestId(/select/i);
  await userEvent.selectOptions(selectFalse, getByTitle(/Quinta/i).value);
  expect(selectFalse).toHaveValue('Quinta');

  const buttonFalse = getByText(/Submit/);
  await userEvent.click(buttonFalse)
  expect(getByTestId(/invalid/)).toBe(getByText(/Texto Inválido/))
  
})

test('renderização inicial com agenda lotada', async () => {

  api.get = jest.fn().mockResolvedValue({
    data: [
      {
      "day": "Segunda",
      "text": "Aula da labenu",
      "id": "aZQM9nKVyYbCj1IlogYb",
      },
      {
        "day": "Terça",
        "text": "Aula de violão",
        "id": "bZQM9nKVyYbCj1IlogYb",
      },
      {
        "day": "Quarta",
        "text": "Aula de teclado",
        "id": "cZQM9nKVyYbCj1IlogYb",
      },
      {
      "day": "Quinta",
      "text": "Tocar violão",
      "id": "oZQM9nKVyYbCj1IlogYb",
      },
      {
      "day": "Sexta",
      "text": "Jogar futebol",
      "id": "dZQM9nKVyYbCj1IlogYb",
      },
      {
        "day": "Sábado",
        "text": "Surfar",
        "id": "fZQM9nKVyYbCj1IlogYb",
      },
      {
        "day": "Domingo",
        "text": "Ir à praia",
        "id": "gZQM9nKVyYbCj1IlogYb",
      },
    ]
  });

  
  const { getByText, getByPlaceholderText, findByText, getByTitle } = render(<App />)

  expect(api.get).toHaveBeenCalled()

  const tarefa = await findByText("Tocar violão")
  expect(tarefa).toBeInTheDocument()
})

test('renderização e deleção de Tarefa', async () => {

  api.get = jest.fn().mockResolvedValue({
    data: [
      {
      "day": "Quinta",
      "text": "Tocar violão",
      "id": "oZQM9nKVyYbCj1IlogYb",
      },
    ]
  });

  
  const { getByText, getByPlaceholderText, findByText, getByTitle } = render(<App />)

  const input = getByPlaceholderText(/Tarefa/i);
  expect(input).toBeInTheDocument();

  expect(getByText(/Submit/)).toBeInTheDocument();

  expect(api.get).toHaveBeenCalled()

  const tarefa = await findByText("Tocar violão")
  expect(tarefa).toBeInTheDocument()

  //Deletar tarefa

  const deleteTask = getByTitle('deleteoZQM9nKVyYbCj1IlogYb');

  expect(deleteTask).toBeInTheDocument()
  userEvent.click(deleteTask)
  api.delete = jest.fn().mockResolvedValue({
    data: [
      {
      "day": "Quinta",
      "text": "Tocar violão",
      "id": "oZQM9nKVyYbCj1IlogYb",
      },
    ]
  });

  expect(api.get).toHaveBeenCalled()
})

test('Renderização e atualização', async () => {
  
  api.get = jest.fn().mockResolvedValue({
    data: [
      {
      "day": "Quinta",
      "text": "Tocar violão",
      "id": "oZQM9nKVyYbCj1IlogYb",
      },
    ]
  });

  
  const { getByText, getByPlaceholderText, findByText, getByTitle, getByTestId } = render(<App />)

  const input = getByPlaceholderText(/Tarefa/i);
  expect(input).toBeInTheDocument();

  expect(getByText(/Submit/)).toBeInTheDocument();
  expect(api.get).toHaveBeenCalled();

  const tarefa = await findByText('Tocar violão')

  const edit = getByTitle('editoZQM9nKVyYbCj1IlogYb')
  userEvent.click(edit)
  
  const inputUpdate = getByPlaceholderText(/Atualizar Tarefa/i)
  userEvent.type(inputUpdate, {target: {value: 'Tocar violão para a família'}})
  expect(inputUpdate).toBeInTheDocument('Tocar violão para a família');

  const selectUpdate = getByTestId('selectUpdate');
  userEvent.selectOptions(selectUpdate, getByTitle('updateSábado').value)
  expect(selectUpdate).toHaveValue('Sábado')

  const btnUpdate = getByText(/Atualizar/i);
  userEvent.click(btnUpdate);

  api.put = jest.fn().mockResolvedValue({
    data: [
      {
      "day": "Sábado",
      "text": "Tocar violão para a família",
      "id": "oZQM9nKVyYbCj1IlogYb",
      },
    ]
  });

  
  wait(()=> expect(getByText('Tocar violão para a família')).toBeInTheDocument())
})

test('Renderização, form edit e cancel edit', async () => {
  
  api.get = jest.fn().mockResolvedValue({
    data: [
      {
      "day": "Quinta",
      "text": "Surfar",
      "id": "oZQM9nKVyYbCj1IlogYb",
      },
    ]
  });

  
  const { getByText, getByPlaceholderText, findByText, getByTitle, getByTestId } = render(<App />)

  const input = getByPlaceholderText(/Tarefa/i);
  expect(input).toBeInTheDocument();

  expect(getByText(/Submit/)).toBeInTheDocument();
  await wait(() => expect(api.get).toHaveBeenCalled());

  const tarefa = await findByText('Surfar')

  const edit = getByTitle('editoZQM9nKVyYbCj1IlogYb')
  userEvent.click(edit)
  
  const form = getByTestId('formUpdate');
  const cancel = getByText('Cancelar');
  userEvent.click(cancel);

  await expect(form).not.toBeInTheDocument()
})