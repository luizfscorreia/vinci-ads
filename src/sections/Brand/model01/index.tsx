import { Brand, GlobalWrapper, Wrapper } from "./styles";

interface Props{
    brands: BrandProps[]
}

interface BrandProps{
    name: string,
    image: string,
    link: string,
    linkAlt: string
}

export default function Brand01({brands}: Props){

    return(
        <GlobalWrapper>
            <Wrapper>
                {brands.map((brand,index) => (
                    <Brand key={index} data-brand-name={brand.name}>
                        <img src={brand.link} alt={brand.linkAlt} />
                        {brand.name}
                    </Brand>
                ))}
            </Wrapper>
        </GlobalWrapper>
    )
}