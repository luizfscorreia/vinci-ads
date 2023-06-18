import styled from "styled-components";

export const GlobalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 1200px;
    max-width: 100%;
    padding: 82px 0;
`

export const Title = styled.h2`
    font-size: 3rem;
    font-weight: 900;
    margin: 0 0 12px 0;

    text-align: center;
    text-transform: uppercase;
`

export const Cards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 42px;
`

export const CTA = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`
