import { ButtonsWrapper, GlobalWrapper, Left, Right, Wrapper} from "./styles";

import image from '../../assets/hero/prova_social.webp'
import Button from "../../components/button";

interface HeroProps{
    id?: string
}

export function Hero({id = 'Hero'}:HeroProps){
    return(
        <GlobalWrapper id={id}>
            <Wrapper>
                <Left>
                    <h1>QUER DECOLAR O SEU NEGÓCIO?</h1>
                    <p>Nós somos a Vinci Ads, nosso negócio é alavancar o seu!</p>
                    <ButtonsWrapper>
                        <Button style="solid"> Como Funciona </Button>
                        <Button style="outlined">Fale Conosco</Button>
                    </ButtonsWrapper>
                </Left>
                <Right>
                    <img src={image} alt="" />
                </Right>
            </Wrapper>
        </GlobalWrapper>
    )
}