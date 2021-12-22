import React from "react";
import {
    NavBarContainer,
    NavLogo,
    NavLinkContainer,
    NavLinkLeft,
    NavLinkRight,
    NavItem,
} from "./NavBarStyle";
import Avatar from "@mui/material/Avatar";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as CardIcon } from "../../res/icons/Card.svg";

export default function NavBar() {
    return (
        <>
            <NavBarContainer>
                <NavLink to="/">
                    <NavLogo>PHINIX</NavLogo>
                </NavLink>

                <NavLinkContainer>
                    <NavLinkLeft>
                        <NavLink to="/">
                            <NavItem>Home</NavItem>
                        </NavLink>

                        <NavItem>Store</NavItem>
                        <NavItem>About</NavItem>
                        <NavItem>Contact</NavItem>
                    </NavLinkLeft>
                    <NavLinkRight>
                        <NavLink to="/auth/login">
                            <NavItem>Login</NavItem>
                        </NavLink>
                        <NavItem>|</NavItem>
                        <NavLink to="/auth/signup">
                            <NavItem>Sign Up</NavItem>
                        </NavLink>
                        <NavLink to="/card">
                            <NavItem>
                                <CardIcon></CardIcon>
                            </NavItem>
                        </NavLink>

                        <Avatar
                            sx={{
                                width: 30,
                                height: 30,
                                backgroundColor: "#ff9696",
                                fontSize: "1rem",
                                cursor: "pointer",
                            }}
                        >
                            R
                        </Avatar>
                    </NavLinkRight>
                </NavLinkContainer>
            </NavBarContainer>
        </>
    );
}
