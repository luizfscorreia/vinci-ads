import { sanitizer } from '../../../shared/sanitizer';

import Button from "../../../components/button";
import { Card, CardProps } from "../../../components/cards/model01";
import {
    GlobalWrapper,
    Wrapper,
    Title,
    Cards,
    CTA,
} from "./styles";

interface WorkProps{
    title: string,
    cards: CardProps[]
}

export function Services({title, cards}: WorkProps){

    if(title)

    return(
        <GlobalWrapper>
            <Wrapper>
                <Title dangerouslySetInnerHTML={{ __html: sanitizer(title) }}></Title>
                <Cards>
                    {cards.map((card, index) => (
                        <Card key={index} title={card.title} content={card.content} />
                    ))}
                </Cards>
                <CTA>
                    <Button style="solid"> VAMOS DECOLAR SEU NEGÓCIO </Button>
                </CTA>
            </Wrapper>
        </GlobalWrapper>
    )
}