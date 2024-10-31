import { useState } from "react";
import { Burgir, Bar, MobileNavItem, MobileList, ListItem, MobileNavLink, Button, Image } from "./navbar.styles";
import logoUnoeste from "../../assets/images/logo-unoeste.png";

export const MobileNavBar = () => {
    const openLink = () => {
        const url = 'https://www.unoeste.br/';
        window.open(url, '_blank');
    };
    //se está no mobile ou não
    const[btnState, setBtnState] = useState(false);

    const toggle = () => {
        setBtnState(!btnState)
        console.log(btnState)
        if (!btnState){
            return document.body.style.overflow = 'hidden';
        }
        return document.body.style.overflow = 'scroll';
    };
    return (
        <>
            <Burgir className={"burgir" + (btnState ? "ativo" : "") + "d-block d-lg-none"} onClick={toggle}>
                <Bar style={{top: 0}}/>
                <Bar style={{top: 0}}/>
                <Bar style={{bottom: 0}}/>
            </Burgir>
            {
                btnState && (
                    <MobileNavItem>
                        <MobileList>
                            <ListItem>
                                <MobileNavLink to="/">Home</MobileNavLink>
                            </ListItem>
                            <ListItem>
                                <MobileNavLink to="/corpo-docente">Corpo Docente</MobileNavLink>
                            </ListItem>
                            <ListItem>
                                <MobileNavLink to="/contato">Contato</MobileNavLink>
                            </ListItem>
                            <ListItem>
                                <Button onClick={openLink}><Image src={logoUnoeste}></Image></Button>
                            </ListItem>
                        </MobileList>
                    </MobileNavItem>
                )
            }
        </>
    );
}