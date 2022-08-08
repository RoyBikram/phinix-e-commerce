import styled from 'styled-components';
import { Variables } from '../../variables/variables';

export const FooterContainer = styled.div`
    padding: 50px 0;
    display: flex;
    justify-content: space-between;
    margin-top: 70px;
    /* position: absolute;
    bottom: 0;
    width: 100%; */
    /* position: sticky;
    bottom: 0;
    width: 100%; */
    @media only screen and (max-width: 1100px) {
        grid-row-gap: 25px;
        display: grid;

        justify-content: space-around;
        grid-template-areas: 'FooterAbout FooterNewsletter' 'QuickLinks FooterContacts';
    }
    @media only screen and (max-width: 720px) {
        /* justify-content: ; */
        grid-row-gap: 35px;
        grid-template-areas: 'FooterAbout FooterAbout' 'FooterNewsletter FooterNewsletter' 'QuickLinks FooterContacts';
    }
`;

export const FooterAbout = styled.div`
    width: 247px;
    .Heading {
        font-family: ${Variables.FontMontserrat};
        font-size: 28px;
        letter-spacing: 7px;
        color: ${Variables.PrimaryColor};
        font-weight: ${Variables.M_Semi_Bold};
        @media only screen and (max-width: 450px) {
            font-size: 23px;
        }
    }
    .Description {
        color: ${Variables.TextColorGray};
        font-size: ${Variables.Body_1};
        margin-top: 20px;
    }
    @media only screen and (max-width: 1100px) {
        grid-area: FooterAbout;
    }
`;

export const QuickLinks = styled.div`
    display: flex;
    flex-direction: column;
    .Heading {
        font-weight: ${Variables.R_Medium};
        margin-bottom: 20px;
    }
    @media only screen and (max-width: 1100px) {
        grid-area: QuickLinks;
    }
`;
export const NavLink = styled.a`
    color: ${Variables.TextColorGray};
    font-size: ${Variables.Body_1};
    transition: 200ms;
    margin-top: 5px;
    &:hover {
        color: ${Variables.TextColorBlack};
    }
`;
export const FooterContacts = styled.div`
    .Heading {
        font-weight: ${Variables.R_Medium};
        margin-bottom: 20px;
    }
    .Phone,
    .Mail,
    .Location {
        svg {
            height: 20px;
        }
        display: flex;
        color: ${Variables.TextColorGray};
        font-size: ${Variables.Body_1};
        margin-top: 10px;
        align-items: center;
        .Content {
            margin-left: 10px;
        }
    }
    @media only screen and (max-width: 1100px) {
        grid-area: FooterContacts;
    }
`;
export const FooterNewsletter = styled.div`
    .Heading {
        font-weight: ${Variables.R_Medium};
        margin-bottom: 20px;
    }
    .Title {
        font-size: ${Variables.Display_5};
        font-weight: ${Variables.R_Medium};
        color: ${Variables.TextColorBlack};
        @media only screen and (max-width: 450px) {
            font-size: 23px;
        }
    }
    .InputContainer {
        background-color: rgb(226 226 226);
        width: 100%;
        display: flex;
        padding: 10px;
        border-radius: 35px;
        margin-top: 20px;
        input {
            /* width: 100%; */
            flex-grow: 1;
            display: inline-block;
            font-size: ${Variables.Title_3};
            outline: none;
            border: none;
            background-color: transparent;
            padding-left: 20px;
        }
        @media only screen and (max-width: 450px) {
            input {

                width: inherit;
            }
    }
    }
    @media only screen and (max-width: 1100px) {
        grid-area: FooterNewsletter;
    }
`;
