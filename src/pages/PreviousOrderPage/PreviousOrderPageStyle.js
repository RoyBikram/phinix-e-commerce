import styled from 'styled-components';
import { Variables } from '../../variables/variables';

export const PreviousOrderPageContainer = styled.div`
    width: 100%;
`;
export const MainContainer = styled.div`
    display: flex;
    .MainContent {
        width: 100%;
        display: grid;
        grid-template-areas: 'OrderProductCard AddressCardContainer PriceSummaryContainer';
        justify-content: space-between;
        height: fit-content;
        grid-gap: 25px;
        .OrderProductCard {
            grid-area: OrderProductCard;
            display: flex;
            flex-direction: column;
            row-gap: 20px;
            width: 450px;
        }
        .PriceSummaryContainer {
            grid-area: PriceSummaryContainer;
        }
        .AddressCardContainer {
            grid-area: AddressCardContainer;
            max-width: 350px;
            background-color: white;
            color: ${Variables.TextColorGray};
            padding: 20px;
            border-radius: 24px;
            position: relative;
            height: fit-content;
            position: sticky;
            top: 150px;
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
        /* @media only screen and (max-width: 1200px) {
            grid-template-areas: 'OrderProductCard OrderProductCard' 'AddressCardContainer PriceSummaryContainer';
        } */
    }
`;
