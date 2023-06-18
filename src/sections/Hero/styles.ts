import styled from "styled-components";

//The global wrapper will handle ultrawide element sizing limitations
export const GlobalWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

`

export const Wrapper = styled.div`
    display: flex;
    max-width: 1200px;
    padding: 0 0 82px 0;
`

export const Left = styled.div`
    h1{
        font-size: 4rem;
        font-weight: 900;
    }

    p{
        font-size: 1.5rem;
        font-weight: regular;
    }
`

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const Right = styled.div`

    max-width: 750px;

    img{
        width: 100%;
    }
`