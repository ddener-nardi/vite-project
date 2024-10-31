import { FippMap, Title, Wrapper } from "./mapa.styles";

export const Mapa = () => {
    return(
        <Wrapper>
            <Title>Onde nos encontrar</Title>
            <>
                <FippMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.8219620017308!2d-51.40758581384413!3d-22.132762858587608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f45b18f82b4f%3A0xc61c929c186b7d81!2sFIPP!5e0!3m2!1sen!2sbr!4v1698289927539!5m2!1sen!2sbr" height="450" scrolling="no">
                </FippMap>
            </>
        </Wrapper>
    );
}