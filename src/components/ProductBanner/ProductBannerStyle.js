import styled from "styled-components";
import { Variables } from "../../variables/variables";

export const ProductBannerContainer = styled.div`
    width: 100%;
    color: white;
    margin-top: 220px;
    
`;
export const BannerContent = styled.div`
position: relative;
    width: 100%;
    background-color: rgb(240 207 122);
    border-radius: 24px;
    display: flex;
    justify-content: space-between;
    padding: 60px 100px;
    .RightSide {
        .OfferName {
            font-size: ${Variables.Display_3};
            line-height: ${Variables.Display_3};
            font-family: ${Variables.FontMontserrat};
            font-weight: ${Variables.M_Extra_Bold};
            margin: 20px 0;
        }
    }
    .LeftSide {
        /* display: flex;
        flex-direction: column;
        row-gap: 20px; */
        width: 350px;
        .Heading  {
            font-size: ${Variables.Display_4};
            font-weight: ${Variables.R_Medium};
            line-height: ${Variables.Display_4};
            margin: 15px 0 20px 0;
        }
        .Description {
            font-size: ${Variables.Body_1};
            margin-bottom: 30px;
        }
    }
    .BannerTWS {
        height: 380px;
        position: absolute;
        bottom: 22%;
        right: 50%;
        transform: translateX(31%);
        filter: drop-shadow(0px -10px 30px rgba(0,0,0,0.2)) saturate(2.5);
    }
`;
