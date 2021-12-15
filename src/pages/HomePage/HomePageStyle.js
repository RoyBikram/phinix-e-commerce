import styled, { css } from "styled-components";
import { Variables } from "../../variables/variables";

export const HomePageContainer = styled.div`
    width: 100%;
`;
export const HeadingContainer = styled.div`
    display: grid;
    grid-template-areas: "Banner Banner Banner" "Earphone TWS Headphone";
    grid-template-columns: 23.75% 23.75% 47.5%;
    grid-column-gap: 2.5%;
`;

// -----------Heading Banner----------
export const HeadingBanner = styled.div`
    grid-area: Banner;
    background: linear-gradient(
        90deg,
        #b37b4a 0%,
        rgba(173, 118, 69, 0.81) 100%
    );
    border-radius: 24px;
    display: grid;
    place-items: center;
    padding: 170px 0px;
    margin-bottom: 2.5%;
`;
export const HeadingBannerContainer = styled.div``;
export const FirstHeading = styled.div`
    font-size: ${Variables.Title_1};
    color: rgba(44, 44, 44, 1);
`;

export const SecondHeading = styled.div`
    font-size: 64px;
    color: rgba(44, 44, 44, 1);
    font-weight: ${Variables.R_Bold};
`;

const PartStyle = css`
    font-size: 135px;
    color: ${Variables.TextColorWhite};
    font-family: ${Variables.FontMontserrat};
    font-weight: ${Variables.M_Extra_Bold};
`;

export const MainHeading = styled.div`
    display: flex;
    margin-bottom: 10px;
`;
export const FirstPart = styled.div`
    ${PartStyle}
    z-index: 1;

    background: -webkit-linear-gradient(360deg, #ffffff 60.94%, #dfdfdf 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
export const SecondPart = styled.div`
    ${PartStyle}
    background: -webkit-linear-gradient( 180deg, #FFFFFF 60.94%, #F3F3F3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const BottomContainer = styled.div`
    float: right;
    margin-top: 70px;
`;

export const BottomHeading = styled.div`
    font-size: 18px;
    color: rgba(44, 44, 44, 1);
    font-weight: ${Variables.R_Medium};
    text-align: right;
`;
export const BottomDescription = styled.div`
    font-size: 14px;
    color: rgba(109, 82, 56, 1);
    width: 285px;
    text-align: right;
    /* font-weight: ${Variables}; */
`;
export const MainImg = styled.img`
    position: absolute;
    transform: translate(6%, -60%) scale(95%);
    filter: drop-shadow(-20px 34px 52px rgba(0, 0, 0, 0.4));
`;

// ------------Category Cards-------------

const subheading = css`
font-size: 16px;
`
const heading = css`
font-size: 38px;
font-weight: 800;
font-family: ${Variables.FontMontserrat};
margin: 10px 0 20px 0;

`
const Card = css`
    height: 350px;
    border-radius: 25px;
    padding: 0px 10%;
    position: relative;
`


export const EarphoneCard = styled.div`
    grid-area: Earphone;
    background-color: rgba(43, 43, 43, 1);
    ${Card}
    .Subheading {
        color: white;
        ${subheading}
        margin-top: 160px;
        margin-left: 3px;
    }
    .Heading {
        color: rgba(68, 68, 68, 1);
        ${heading}
    }
    img {
        position: absolute;
        bottom: 0;
        right: 10%;
        width: 160px;
    }
`;
export const TWSCard = styled.div`
    grid-area: TWS;
    background-color: rgba(221, 52, 62, 1);
    ${Card}

    .Subheading {
        color: Black;
        ${subheading}
        margin-top: 160px;
        margin-left: 3px;
    }
    .Heading {
        color: rgb(175 38 46);
        ${heading}
    }
    img {
        position: absolute;
        top: 5%;
        right: 10%;
        filter: drop-shadow(-5px 5px 15px rgba(0, 0, 0, 0.5));
    }
`;
export const HeadphoneCard = styled.div`
    grid-area: Headphone;
    background-color: rgba(154, 154, 154, 1);
    ${Card}
    .Subheading {
        color: white;
        ${subheading}
        margin-top: 70px;
        margin-left: 3px;
    }
    .Heading {
        color: rgba(124, 124, 124, 1);
        ${heading}
    }
    .Description {
        width: 200px;
        color: rgba(82, 82, 82, 1);
        margin-bottom: 20px;
        font-size: 14px;
    }
    img {
        position: absolute;
        top: 10%;
        right: 10%;
        height: 275px;
        filter: drop-shadow(-5px 5px 15px rgba(0, 0, 0, 0.5));
    }
`;
