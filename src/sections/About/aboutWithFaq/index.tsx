import { useState } from "react";
import Button from "../../../components/button";
import { About, FAQ, FAQContent, FAQItem, FAQTitle, GlobalWrapper, Wrapper } from "./styles";

interface Question{
    question: string,
    answer: string
}

export function AboutWithFAQ(){

    const faq = [
        {
            question: "Como a Vinci Ads Funciona",
            awnser: "Resposta 1"
        },
        {
            question: "Como a Vinci irá aumentar seu faturamento na internet?",
            awnser: "Resposta 2"
        },
        {
            question: "Como a Vinci Ads Funciona",
            awnser: "Resposta 3"
        },
        {
            question: "Como a Vinci Ads Funciona",
            awnser: "Resposta 4"
        },
        {
            question: "Como a Vinci Ads Funciona",
            awnser: "Resposta 5"
        },
        {
            question: "Como a Vinci Ads Funciona",
            awnser: "Resposta 6"
        },
    ]

    return(
        <GlobalWrapper>
            <Wrapper>
                <About>
                    <h2>Conheça a Vinci</h2>
                    <h3>Especialista em Crescimento</h3>
                    <p>
                    Loren ipsun do sur ipsun do sur ipsun do sur ipsun do sur ipsun do sur ipsun do sur ipsun do sur ipsun do sur ipsun do sur ipsun do sur ipsun do sur ipsun do sur ipsun do sur ipsun do sur <br/><br/>
                    ipsun do sur ipsun do sur ipsun do sur ipsun do sur ipsun do sur ipsun do sur ipsun do sur ipsun do.
                    </p>

                    <Button style="solid">VAMOS DECOLAR SEU NEGÓCIO</Button>
                </About>
                <FAQ>
                    {faq.map((question, index) => (
                        <Question key={index} question={question.question} answer={question.awnser}/>
                    ))}
                </FAQ>
            </Wrapper>
        </GlobalWrapper>
    )
}

function Question({question, answer}: Question){
    const [isOpen, setIsOpen] = useState(false)

    function handleToggle(){
        setIsOpen(!isOpen)
    }

    return(
        <FAQItem>
            <FAQTitle onClick={handleToggle}> {isOpen ? '-' : '+'} {question}</FAQTitle>
            {isOpen ? <FAQContent>{answer}</FAQContent> : ''}
        </FAQItem>  
    )
}
