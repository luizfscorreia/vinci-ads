import styled from "styled-components";

export const GlobalWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Wrapper = styled.div`
    display: grid;
    max-width: 1200px;
    padding: 82px 0;

    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 40px
`

export const Brand = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 66px;

    font-size: 16px;
    font-weight: bolder;

    background: #FFFFFF;
    box-shadow: 0px 0px 103px rgba(79, 0, 255, 0.1);
    border-radius: 7px;
`