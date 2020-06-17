import styled from 'styled-components'

export const DivContainer = styled.div`
    width: 300px;
    min-height: 400px;
    margin: auto;
    border: 1px solid;
`

export const DivButtons = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);  
`

export const DivHeader = styled.div`
    display: flex;
    flex-direction: row-reverse;
    border-bottom: 1px solid;
`