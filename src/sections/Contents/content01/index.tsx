import { Card02, Card02Props } from '../../../components/cards/model02'
import { sanitizer } from '../../../shared/sanitizer'
import {
    GlobalWrapper,
    Wrapper,
    Content,
    Title,
    Items,
    Image,
} from './styles'

interface ContentProps{
    title: string,
    cards: Card02Props[],
    image: {
        link: string,
        title: string,
        alt: string,
        loading: 'eager' | 'lazy'
    }
}

export function Content01({title, cards, image}:ContentProps){
    return(
        <GlobalWrapper>
            <Wrapper>
                <Content>
                    <Title dangerouslySetInnerHTML={{ __html: sanitizer(title) }}></Title>
                    <Items>
                        {cards.map((card, index) => (
                            <Card02 key={index} icon={card.icon} title={card.title} text={card.text} />
                        ))}
                    </Items>
                </Content>
                <Image>
                    <img src={image.link} alt={image.alt} title={image.title} loading={image.loading}/>
                </Image>
            </Wrapper>
        </GlobalWrapper>
    )
}