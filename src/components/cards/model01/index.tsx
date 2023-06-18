import {
    Wrapper,
    Icon,
    Title,
    Content,
} from "./styles";

interface ContentProps{
    text: string,
    link?: string,
    description?:string
}

export interface CardProps{
    icon?: string,
    title: string,
    content: ContentProps[],
}

function link(text:string, link?:string){
    if(link){
        return <a href={link}> {text} </a>
    }else{
        return text
    }
}

export function Card({icon, title, content}:CardProps){
    return(
        <Wrapper>
            {icon && <Icon>{icon}</Icon>}
            {title && <Title>{title}</Title>}
            <Content>
                <ul>
                    {content.map((item, index) => (
                        <li key={index}>
                            {link(item.text, item.link)}
                        </li>
                    ))}
                </ul>
            </Content>
        </Wrapper>
    )
}