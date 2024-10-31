import { Nav, Wrapper, Image, List, ListItem, NavLink, Button } from "./navbar.styles";

import logoFipp from "../../assets/images/logo-fipp.png";
import logoUnoeste from "../../assets/images/logo-unoeste.png";
import { MobileNavBar } from "./mobile-navbar";

export const NavBar = () => {
    const openLink = () => {
        const url = 'https://www.unoeste.br/';
        window.open(url, '_blank');
    }
    return(
        <Wrapper>
            <Nav>
                <Image src={logoFipp}/>
                <List>
                    <ListItem>
                        <NavLink to="/">Home</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to="/corpo-docente">Corpo Docente</NavLink>
                    </ListItem>
                    <ListItem>
                        <NavLink to="/contato">Contato</NavLink>
                    </ListItem>
                    <ListItem>
                        <Button onClick={openLink}><Image src={logoUnoeste}></Image></Button>
                    </ListItem>
                </List>
                <MobileNavBar/>
            </Nav>
        </Wrapper>
    );
}