import { CardContent } from "./card-content"
import { Card, Message, SubTitle, Title, Wrapper } from "./sobre-nos.styles";
import { CardType } from "./types"

export const SobreNos = () =>{
    const cards: CardType[] = CardContent();

    return(
        <Wrapper>
            <Title>Sobre nós</Title>
            <SubTitle>console.log("Hello, world!")</SubTitle>
            {
                cards.map((content) => (
                    <Card key={content.id}>
                        <Message>{content.message}</Message>
                    </Card>
                ))
            }
        </Wrapper>
    );
}