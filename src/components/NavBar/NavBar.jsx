import React, { useState } from 'react';
import {
    NavBarContainer,
    NavLogo,
    NavLinkContainer,
    NavLinkLeft,
    NavLinkRight,
    NavItem,
} from './NavBarStyle';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
import { ReactComponent as CardIcon } from '../../res/icons/Card.svg';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { auth } from '../../firebase/Firebase';
import { signOut } from 'firebase/auth';
import { setUser } from '../../redux/UserReducer/UserReducer';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Divider, Menu, MenuItem } from '@mui/material';
import { Box, flexbox } from '@mui/system';
export default function NavBar() {
    const dispatch = useDispatch();
    let user = useSelector((state) => state.User.UserData);
    let Quantity = useSelector((state) => state.Card.CardProductQuantity);
    // const [IsMenuOpen, setIsMenuOpen] = useState(false);
    const HandelLogoutButtonClick = () => {
        signOut(auth)
            .then(() => {
                dispatch(setUser(null));
            })
            .catch((error) => {});
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <NavBarContainer>
                <NavLink style={{ textDecoration: 'none' }} to='/'>
                    <NavLogo>PHINIX</NavLogo>
                </NavLink>

                <NavLinkContainer>
                    <NavLinkLeft>
                        <NavLink to='/'>
                            <NavItem>Home</NavItem>
                        </NavLink>
                        <NavLink to='/my_order'>
                            <NavItem>Orders</NavItem>
                        </NavLink>
                        <NavItem>About</NavItem>
                        <NavItem>Contact</NavItem>
                    </NavLinkLeft>
                    <NavLinkRight>
                        {!user ? (
                            <Box
                                sx={{
                                    display: {
                                        xs: 'none',
                                        md: 'inline-block',
                                    },
                                }}
                            >
                                <NavLink
                                    style={{
                                        textDecoration: 'none',
                                    }}
                                    to='/auth/login'
                                >
                                    <NavItem>Login</NavItem>
                                </NavLink>
                                <NavItem>|</NavItem>
                                <NavLink
                                    style={{ textDecoration: 'none' }}
                                    to='/auth/signup'
                                >
                                    <NavItem>Sign Up</NavItem>
                                </NavLink>
                            </Box>
                        ) : (
                            <Button
                                onClick={HandelLogoutButtonClick}
                                sx={{
                                    display: {
                                        xs: 'none',
                                        md: 'flex',
                                    },
                                    padding: '7px 14px',
                                    boxShadow: 'none',
                                    ':hover': {
                                        boxShadow: 'none',
                                    },
                                }}
                                variant='text'
                            >
                                <NavItem>LogOut</NavItem>
                            </Button>
                        )}

                        <NavLink to='/card'>
                            <IconButton aria-label='cart'>
                                <Badge
                                    badgeContent={Quantity ? Quantity : 0}
                                    color='warning'
                                >
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        </NavLink>
                        {user ? (
                            <Avatar
                                sx={{
                                    width: 30,
                                    height: 30,
                                    backgroundColor: '#ff9696',
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    display: {
                                        xs: 'none',
                                        md: 'flex',
                                    },
                                }}
                            >
                                R
                            </Avatar>
                        ) : (
                            ''
                        )}
                        <IconButton
                            id='basic-button'
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup='true'
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            sx={{
                                display: {
                                    xs: 'flex',
                                    md: 'none',
                                },
                            }}
                        >
                            <MenuRoundedIcon />
                        </IconButton>
                        <Menu
                            id='basic-menu'
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem sx={{ px: '50px', justifyContent:'center' }} onClick={handleClose}>
                                <NavLink to='/'>
                                    <NavItem>Home</NavItem>
                                </NavLink>
                            </MenuItem>
                            <Divider sx={{my:'0px !important'}} />
                            <MenuItem sx={{ px: '50px', justifyContent:'center' }} onClick={handleClose}>
                                <NavLink to='/my_order'>
                                    <NavItem>Orders</NavItem>
                                </NavLink>
                            </MenuItem>
                            <Divider sx={{my:'0px !important'}} />

                            {!user ? (
                                <>
                                    <MenuItem
                                        sx={{ px: '50px', justifyContent:'center' }}
                                        onClick={handleClose}
                                    >
                                        <NavLink
                                            style={{ textDecoration: 'none' }}
                                            to='/auth/login'
                                        >
                                            <NavItem>Login</NavItem>
                                        </NavLink>
                                    </MenuItem>
                                    <Divider sx={{my:'0px !important'}} />

                                    <MenuItem
                                        sx={{ px: '50px', justifyContent:'center' }}
                                        onClick={handleClose}
                                    >
                                        <NavLink
                                            style={{ textDecoration: 'none' }}
                                            to='/auth/signup'
                                        >
                                            <NavItem>Sign Up</NavItem>
                                        </NavLink>
                                    </MenuItem>
                                </>
                            ) : (
                                <MenuItem
                                    sx={{ px: '50px', justifyContent:'center' }}
                                    onClick={handleClose}
                                >
                                    <Button
                                        onClick={HandelLogoutButtonClick}
                                        sx={{
                                            padding: '7px 14px',
                                            boxShadow: 'none',
                                            ':hover': {
                                                boxShadow: 'none',
                                            },
                                        }}
                                        variant='text'
                                    >
                                        <NavItem>LogOut</NavItem>
                                    </Button>
                                </MenuItem>
                            )}
                        </Menu>
                    </NavLinkRight>
                </NavLinkContainer>
            </NavBarContainer>
        </>
    );
}
