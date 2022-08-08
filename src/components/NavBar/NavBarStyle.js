import styled from 'styled-components';
import { Variables } from '../../variables/variables';

export const NavBarContainer = styled.div`
    height: 100px;
    width: 100%;
    position: sticky;
    z-index: 1000;
    top: 0;
    padding: 0px 5px;
    display: flex;
    align-items: center;
    background: rgb(245, 245, 245);
    @media only screen and (max-width: 900px) {
    height: 70px;
    }
`;

export const NavLogo = styled.a`
    font-family: ${Variables.FontMontserrat};
    font-size: 28px;
    letter-spacing: 7px;
    color: ${Variables.PrimaryColor};
    font-weight: ${Variables.M_Semi_Bold};
    @media only screen and (max-width: 450px) {
        font-size: 23px;
    }
    
`;
export const NavLinkContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    margin-left: 50px;
    @media only screen and (max-width: 900px) {
        justify-content: end;
    }
`;
export const NavLinkRight = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
    @media only screen and (max-width: 450px) {
        gap: 15px;
    }
`;
export const NavLinkLeft = styled.div`
    display: flex;
    gap: 50px;
    align-items: center;
    @media only screen and (max-width: 900px) {
        display: none;
    }
`;

export const NavItem = styled.div`
    color: ${Variables.TextColorGray};
    font-size: 16px;
    transition: 200ms;
    &:hover {
        color: ${Variables.TextColorBlack};
    }
`;
