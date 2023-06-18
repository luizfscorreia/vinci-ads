import {
    Wrapper,
    Icon,
    Content,
    Title,
    Text,
} from './styles'

export interface Card02Props{
    icon?: string,
    title:string,
    text:string,
}

export function Card02({icon, title, text}:Card02Props){
    return(
        <Wrapper>
            {icon && <Icon>{icon}</Icon>}
            <Content>
                <Title>{title}</Title>
                <Text>{text}</Text>
            </Content>
        </Wrapper>
    )
}