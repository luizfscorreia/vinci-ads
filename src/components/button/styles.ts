import styled from "styled-components";

interface Props {
    styleType: 'solid' | 'outlined'
}

export const Wrapper = styled.button<Props>`
    all:unset;
    width: fit-content;
    padding: 12px 24px;

    font-size: 1rem;
    font-weight: bold;

    color: ${({styleType}) => styleType === 'solid' ? 'white' : '#FFA800'};
    background-color: ${({styleType}) => styleType === 'solid' ? '#FFA800' : ''};

    border: ${({styleType}) => styleType === 'outlined' ? '2px solid #FFA800' : ''};;
    border-radius: 7px;
`