import React from 'react'
import { FooterAbout, FooterContainer, QuickLinks, NavLink, FooterContacts,FooterNewsletter } from './FooterStyle'
import Button from "@mui/material/Button";
import {ReactComponent as MailIcon} from '../../res/icons/mail.svg'
import {ReactComponent as MapPinIcon} from '../../res/icons/map-pin.svg'
import {ReactComponent as PhoneIcon} from '../../res/icons/phone.svg'

export default function Footer() {
    return (
        <FooterContainer>
            <FooterAbout>
                <div className="Heading">PHINIX</div>
                <div className="Description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dicta dolores impedit? Ab dignissimos nobis architecto pariatur sit eum atque!</div>
            </FooterAbout>
            <QuickLinks>
                <div className="Heading">Quick Links</div>
                        <NavLink>Home</NavLink>
                        <NavLink>Store</NavLink>
                        <NavLink>About</NavLink>
                        <NavLink>Contact</NavLink>
            </QuickLinks>
            <FooterContacts>
            <div className="Heading">Contacts</div>
                <div className="Phone">
                    <PhoneIcon />
                    <div className="Content">987654321</div>
                </div>
                <div className="Location">
                    <MapPinIcon />
                    <div className="Content">Kolkata, India</div>
                </div>
                <div className="Mail">
                    <MailIcon />
                    <div className="Content">sample12345.com</div>
                </div>
            </FooterContacts>
            <FooterNewsletter>
            <div className="Heading">Subscribe To Our Email</div>
                <div className="Title">For Latest News & Updates </div>
                <div className="InputContainer">
                    <input type="email" />
                    <Button variant="contained">Buy Now</Button>
                </div>
            </FooterNewsletter>
        </FooterContainer>
    )
}
