import { PropsWithChildren } from "react";
import { Wrapper } from "./styles";

interface Props extends PropsWithChildren{
    style: 'solid' | 'outlined';
}

export default function Button({style, children}:Props){
    return(
        <Wrapper styleType={style}>
            {children}
        </Wrapper>
    )
}