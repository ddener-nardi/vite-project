import React, { useState } from "react"
import { Form, FormGroup, FormLabel, Image, Input, SubmitButton, Title, Wrapper } from "./duvidas.styles";

import computador from "../../../../assets/icons/desenho.svg";

export const Duvidas = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [question, setQuestion] = useState('');

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const handleQuestionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuestion(event.target.value);
    };

    // planilha como db
    const handleSendQuestion = async (event: {preventDefault: () => void; }) => {
        event.preventDefault();

        const sheetDBUrl = "https://sheetdb.io/api/v1/p33s9qi7h0f5q";

        // corpo enviado para a requisição
        const payLoad = {
            Nome: name,
            Email: email,
            Duvidas: question
        };

        try {
            const response = await fetch(sheetDBUrl, {
                method: 'POST',
                headers:{
                    'Content-type': 'aplication/json',
                },
                body: JSON.stringify(payLoad), //conversão da string em json
            });

            if(response.ok){
                console.log("Enviado para o sheetDB com sucesso!");
                setEmail('');
                setName('');
                setQuestion('');
            } else{
                console.log('Erro ao enviar para sheetDB: ', response.statusText);
            }
        } catch (error) {
            console.log('Erro ao enviar para o sheetDB', error);
        }
    }

    return(
        <>
            <Title>Dúvidas?</Title>
            <Wrapper>
                <Image src={computador} alt="computador"></Image>
                <Form action="">
                    <FormGroup>
                        <FormLabel>Nome</FormLabel>
                        <Input
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Pergunta</FormLabel>
                        <Input
                            type="text"
                            value={question}
                            onChange={handleQuestionChange}
                        />
                    </FormGroup>
                    <SubmitButton type="submit" onClick={handleSendQuestion}>Enviar</SubmitButton>
                </Form>
            </Wrapper>
        </>
    );
}