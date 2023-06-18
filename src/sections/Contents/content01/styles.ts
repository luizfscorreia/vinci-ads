import styled from "styled-components"

export const GlobalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: blue;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 1200px;
    max-width: 100%;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    margin-right: 64px;
`

export const Title = styled.h2`
    font-size: 48px;
    font-weight: 900;

    margin: 0 0 52px 0;
`

export const Items = styled.div`
    display: flex;
    flex-direction: column;
    
    max-width: 75%;
    gap: 32px;
`

export const Image = styled.div`
    display: flex;

    width: 455px;
    min-height: 100%;
    border-radius: 7px;
    background-color: gray;
`
