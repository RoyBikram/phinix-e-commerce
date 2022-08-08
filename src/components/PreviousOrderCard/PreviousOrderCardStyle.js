import styled from 'styled-components';
import { Variables } from '../../variables/variables';

export const PreviousOrderCardContainer = styled.div`
    width: 100%;
`;
export const Heading = styled.div`
    margin: 50px auto 20px 3px;
    font-weight: ${Variables.R_Medium};
`;

export const MainContent = styled.div`
    width: 100%;
    display: grid;
    grid-template-areas: 'OrderProductCard AddressCardContainer PriceSummaryContainer';
    justify-content: space-between;
    height: fit-content;
    gap: 25px;
    @media only screen and (max-width: 1200px) {
        grid-template-areas: 'OrderProductCard AddressCardContainer' 'OrderProductCard PriceSummaryContainer';
        justify-content: space-evenly;
    }
    @media only screen and (max-width: 900px) {
        grid-template-areas: 'PriceSummaryContainer AddressCardContainer' 'OrderProductCard OrderProductCard';
    }
    @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    }
    .OrderProductCard {
        grid-area: OrderProductCard;
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        width: 450px;
        @media only screen and (max-width: 600px) {
            width: 100%;
        }
    }
    .PriceSummaryContainer {
        grid-area: PriceSummaryContainer;
    }
    .AddressCardContainer {
        grid-area: AddressCardContainer;
        max-width: 400px;
        background-color: white;
        color: ${Variables.TextColorGray};
        padding: 20px;
        border-radius: 24px;
        position: relative;
        height: fit-content;
        &::before {
            content: '';
            background-color: rgb(245, 245, 245);
            height: 2px;
            width: 100%;
            position: absolute;
            left: 0;
            top: 60px;
        }
        .EditButton {
            position: absolute;
            right: 15px;
            top: 15px;
        }
        .Heading {
            font-size: ${Variables.Title_3};
            margin-bottom: 50px;
            text-align: center;
        }
        .TopPart {
            display: flex;
            color: ${Variables.TextColorBlack};
            .PhoneNumber {
                margin-left: 20px;
            }
            margin-bottom: 20px;
        }
    }
`;
