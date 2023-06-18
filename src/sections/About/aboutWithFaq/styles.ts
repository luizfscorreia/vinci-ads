import styled from "styled-components";

export const GlobalWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1200px;
    padding: 82px 0;

    @media screen and (max-width:900px){
        
    }
`

export const About = styled.div`
    display: flex;
    flex-direction: column;

    flex: 1 1 0px;
    padding-right: 125px;

    h2{
        font-size: 3rem;
        font-weight: 900;
        margin: 0 0 12px 0;
        
        text-transform: uppercase;
    }

    h3{
        font-size: 1rem;
        font-weight: 700;
        margin: 0 0 24px 0;

        text-transform: uppercase;
        color: blue;
    }

    p{
        font-size: 1rem;
        font-weight: 400;
        margin: 0 0 24px 0;
    }
`

export const FAQ = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 0px;
`

export const FAQItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;

    :last-of-type{
        margin-bottom: 0px;
    }
`
export const FAQTitle = styled.div`
    font-size: 1rem;
    font-weight: 700;

    cursor:pointer;
`
export const FAQContent = styled.div`
    display: flex;
    margin-top: 12px;
    padding: 24px;

    font-size: 1rem;
    border-radius: 6px;
    background-color: white;
`