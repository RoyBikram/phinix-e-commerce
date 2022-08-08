import styled from 'styled-components';
import { Variables } from '../../variables/variables';

export const ProductBannerContainer = styled.div`
    width: 100%;
    color: white;
    margin-top: 220px;
    @media only screen and (max-width: 1100px) {
        margin-top: 100px;
    }
`;
export const BannerContent = styled.div`
    position: relative;
    width: 100%;
    background-color: rgb(240 207 122);
    border-radius: 24px;
    display: flex;
    justify-content: space-between;
    padding: 60px 100px;
    @media only screen and (max-width: 1100px) {
        /* flex-direction: column; */
        display: grid;
        grid-template-areas: 'right Banner' 'left Banner';
        justify-content: space-around;
    }
    @media only screen and (max-width: 768px) {
        padding: 30px 50px;
    }
    @media only screen and (max-width: 600px) {
        grid-template-areas: 'right' 'Banner' 'left';
        gap: 25px;
        padding: 30px 30px;
        max-width: 400px;
        margin: 0 auto;

        /* justify-content: center; */
        /* align-items: center; */
    }
    .RightSide {
        .OfferName {
            font-size: ${Variables.Display_3};
            line-height: ${Variables.Display_3};
            font-family: ${Variables.FontMontserrat};
            font-weight: ${Variables.M_Extra_Bold};
            margin: 20px 0;
        }
        @media only screen and (max-width: 1100px) {
            grid-area: right;
        }
    }
    .LeftSide {
        /* display: flex;
        flex-direction: column;
        row-gap: 20px; */
        width: 350px;
        .Heading {
            font-size: ${Variables.Display_4};
            font-weight: ${Variables.R_Medium};
            line-height: ${Variables.Display_4};
            margin: 15px 0 20px 0;
        }
        .Description {
            font-size: ${Variables.Body_1};
            margin-bottom: 30px;
        }
        @media only screen and (max-width: 1100px) {
            grid-area: left;
            width: 250px;
        }
    }
    .BannerTWS {
        height: 380px;
        position: absolute;
        bottom: 22%;
        right: 50%;
        transform: translateX(31%);
        filter: drop-shadow(0px -10px 30px rgba(0, 0, 0, 0.2)) saturate(2.5);
        @media only screen and (max-width: 1100px) {
            grid-area: Banner;
            position: static;
            transform: translateX(0%);
            height: 320px;
            align-self: center;
        }
        @media only screen and (max-width: 768px) {
            height: 260px;
        }
        @media only screen and (max-width: 600px) {
            justify-self: center;
        }
    }
`;
