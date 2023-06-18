import styled from "styled-components"


export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;

    padding: 1rem;
    background-color: white;
    border-radius: 7px;
`

export const Icon = styled.div`
    display: flex;
    width: 40px;
    height: 40px;
    
    border-radius: 7px;
    background-color: black;
`

export const Content = styled.div`
    display: flex;
    flex: 1 1;
    flex-direction: column;
    font-size: 1rem;
    font-weight: 400;

    margin-left: 26px;
`

export const Title = styled.h3`
    font-size: 1rem;
    font-weight: bold;

    margin: 0 0 12px 0;
`

export const Text = styled.div`
    font-size: 1rem;
`
