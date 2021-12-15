import React from "react";
import {
    NavBarContainer,
    NavLogo,
    NavLinkContainer,
    NavLinkLeft,
    NavLinkRight,
    NavLink,
} from "./NavBarStyle";
import Avatar from "@mui/material/Avatar";
import { ReactComponent as CardIcon } from "../../res/icons/Card.svg";

export default function NavBar() {
    return (
        <>
            <NavBarContainer>
                <NavLogo>PHINIX</NavLogo>
                <NavLinkContainer>
                    <NavLinkLeft>
                        <NavLink>Home</NavLink>
                        <NavLink>Store</NavLink>
                        <NavLink>About</NavLink>
                        <NavLink>Contact</NavLink>
                    </NavLinkLeft>
                    <NavLinkRight>
                        <NavLink>Login</NavLink>
                        <NavLink>|</NavLink>
                        <NavLink>Sign In</NavLink>
                        <NavLink>
                            <CardIcon></CardIcon>
                        </NavLink>
                        <Avatar sx={{ width: 30, height: 30, backgroundColor:"#ff9696", fontSize:"1rem", cursor:'pointer' }}>R</Avatar>
                    </NavLinkRight>
                </NavLinkContainer>
            </NavBarContainer>
        </>
    );
}
