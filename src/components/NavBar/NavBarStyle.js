import styled from "styled-components";
import { Variables } from "../../variables/variables";

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
`;

export const NavLogo = styled.a`
    font-family: ${Variables.FontMontserrat};
    font-size: 28px;
    letter-spacing: 7px;
    color: ${Variables.PrimaryColor};
    font-weight: ${Variables.M_Semi_Bold};
`;
export const NavLinkContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    margin-left: 50px;
`;
export const NavLinkRight = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
`;
export const NavLinkLeft = styled.div`
    display: flex;
    gap: 50px;
    align-items: center;
`;

export const NavItem = styled.div`
    color: ${Variables.TextColorGray};
    font-size: 16px;
    transition: 200ms;
    &:hover {
        color: ${Variables.TextColorBlack};
    }
`;


