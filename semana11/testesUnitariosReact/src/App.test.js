import React from "react";
import { render, fireEvent, waitForElement, getByText, getByTestId, getByAltText } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from "./App";

describe('Testes', () => {

test('Input vazio', () => {
    const { getByTestId, getByText } = render(<App />);
    const btnAdd = getByTestId('btnInput')
    fireEvent.click(btnAdd)
    const postVazio = getByText(/Nenhum Post/)
    expect(postVazio).toHaveTextContent(/Nenhum Post/);
});
//Adicionar post
test('Adicionar/Curtir/Descurtir/Deletar Post', async () => {
    const { getByPlaceholderText, getByTestId, getByText } = render(<App />);

    const newPost = 'testing';

    //change input
    const inputPost = getByPlaceholderText(/Novo post/i)

    fireEvent.change(inputPost, 
        { target: {value: 'testing'} }
    )

    expect(inputPost.value).toBe(newPost);

    //Adicionar post
    const btnAdd = getByTestId('btnInput')
    fireEvent.click(btnAdd)
    const post = getByText(newPost)
    expect(post).toHaveTextContent('testing');
    //input vazio
    expect(inputPost.value).toBe('');

    //curtir post
    const likeBtn = getByTestId(/like-button/)
    fireEvent.click(likeBtn)
    expect(likeBtn).toHaveTextContent(/Descurtir/);

    //descurtir post
    const dislike = getByTestId(/like-button/)
    fireEvent.click(likeBtn);
    expect(likeBtn).toHaveTextContent(/Curtir/)

    //deletar post
    const deletePost = getByTestId(/deletePost/);
    fireEvent.click(deletePost);
    const zeroPost = getByTestId(/zeroPost/);
    expect(zeroPost).toHaveTextContent(/Nenhum Post/)
})
test('Adicionar/Adicionar/Quantidade/Deletar 2o Post', async () => {
    const { getByPlaceholderText, getByTestId, getByTitle } = render(<App />);

    const newPost = 'testing';

    //change input
    let inputPost = getByPlaceholderText(/Novo post/i)
    fireEvent.change(inputPost, 
        { target: {value: 'testing'} }
    )
    expect(inputPost.value).toBe(newPost);

    //Adicionar post
    let btnAdd = getByTestId('btnInput')
    fireEvent.click(btnAdd)
    inputPost = getByPlaceholderText(/Novo post/i)
    fireEvent.change(inputPost, 
        { target: {value: 'testing2'} }
    )
    expect(inputPost.value).toBe('testing2');
    btnAdd = getByTestId('btnInput')
    fireEvent.click(btnAdd)
    

    //Quantidade de Posts
    let quantidadePosts = getByTestId(/quantidade-posts/);
    expect(quantidadePosts).toHaveTextContent(/Quantidade de Posts: 2/)
    //input vazio
    expect(inputPost.value).toBe('');

    //Deletar testing2
    const deletePost = getByTitle(/testing2/);
    console.log(deletePost)
    fireEvent.click(deletePost);
    quantidadePosts = getByTestId(/quantidade-posts/);
    expect(quantidadePosts).toHaveTextContent(/Quantidade de Posts: 1/)
    
})

});