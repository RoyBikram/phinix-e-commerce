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
import { NavLink } from "react-router-dom";
import { ReactComponent as CardIcon } from "../../res/icons/Card.svg";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { auth } from "../../firebase/Firebase";
import { signOut } from "firebase/auth";
import { setUser } from "../../redux/UserReducer/UserReducer";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from '@mui/material/IconButton';

export default function NavBar() {
    const dispatch = useDispatch();
    let user = useSelector((state) => state.User.UserData);
    let Quantity = useSelector((state) => state.Card.CardProductQuantity);

    const HandelLogoutButtonClick = () => {
        signOut(auth)
            .then(() => {
                dispatch(setUser(null));
            })
            .catch((error) => {});
    };

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
                        <NavLink to="/my_order">
                            <NavItem>Orders</NavItem>
                        </NavLink>
                        <NavItem>About</NavItem>
                        <NavItem>Contact</NavItem>
                    </NavLinkLeft>
                    <NavLinkRight>
                        {!user ? (
                            <>
                                <NavLink to="/auth/login">
                                    <NavItem>Login</NavItem>
                                </NavLink>
                                <NavItem>|</NavItem>
                                <NavLink to="/auth/signup">
                                    <NavItem>Sign Up</NavItem>
                                </NavLink>
                            </>
                        ) : (
                            <Button
                                onClick={HandelLogoutButtonClick}
                                sx={{
                                    padding: "7px 14px",
                                    boxShadow: "none",
                                    ":hover": {
                                        boxShadow: "none",
                                    },
                                }}
                                variant="text"
                            >
                                <NavItem>LogOut</NavItem>
                            </Button>
                        )}

                        <NavLink to="/card">
                            <IconButton aria-label="cart">
                                <Badge badgeContent={(Quantity)?Quantity:0} color="warning">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        </NavLink>
                        {user ? (
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
                        ) : (
                            ""
                        )}
                    </NavLinkRight>
                </NavLinkContainer>
            </NavBarContainer>
        </>
    );
}
