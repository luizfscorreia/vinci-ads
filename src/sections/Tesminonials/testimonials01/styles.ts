import styled from "styled-components"

export const GlobalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 1200px;
    max-width: 100%;

    overflow-x: hidden;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 ;
    margin-right: 64px;
`

export const Title = styled.h2`
    font-size: 3rem;
    font-weight: 900;
    margin: 0 0 52px 0;
`

export const Description = styled.div`
    font-size: 1rem;
    font-weight: 400;
`

export const Topics = styled.div`

`

export const TopicIcon = styled.div`

`

export const TopicTitle = styled.div`

`

export const Testimonials = styled.div`
    position: relative;
    max-width: 650px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 22px;

    .empty{
        display: flex;
        box-shadow: none;
    }

    .empty:first-child{
        background: linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 50%);
    }
    .empty:last-child{
        background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 50%);
        height: 50%;
    }

    .testimonial:nth-child(odd){
        position: relative;
        top: -50%;
    }
`

export const Testimonial = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 300px;
    padding: 16px 24px;

    background-color: white;
    border-radius: 7px;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
`

export const TestRating = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const TestText = styled.div`
    margin-top: 16px;
    max-height: 150px;
    overflow: auto;

    ::-webkit-scrollbar {
        width: 6px;
        
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: #DEDEDE;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #CECECE;
    }
`
export const TestFooter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 24px;
`
export const TestAvatar = styled.div`
    
    img{
        width: 40px;
        height: 40px;
        border-radius: 100px;
    }
`
export const TestFooterWrapper = styled.div`
    margin-left: 16px;
`
export const TestName = styled.div`

`
export const TestCompany = styled.div`

`