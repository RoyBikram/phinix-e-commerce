import styled from "styled-components";
import { Variables } from "../../variables/variables";

export const ProductCardContainer = styled.div`
    height: 450px;
    width: 330px;
    background-color: ${Variables.BackgroundGray};
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    .MainContainer {
        flex-grow: 1;
        padding: 15px;

        .ThumbnailContainer {
            background-color: white;
            padding: 15px;
            height: 60%;
            width: 100%;
            border-radius: 12px;
        }
        .DescriptionContainer {
            padding: 10px;
            .Title {
                margin-top: 10px;
                font-size: ${Variables.Title_2};
                font-weight: ${Variables.R_Medium};
            }
            .PriceContainer {
                display: flex;
                margin-top: 10px;
                align-items: flex-end;
                column-gap: 7px;
                .CurrentPrice {
                    font-size: ${Variables.Title_3};
                    font-weight: ${Variables.R_Bold};
                }
                .OriginalPrice {
                    font-size: ${Variables.Body_1};
                    text-decoration-line: line-through;
                    color: ${Variables.TextColorGray};
                }
                .Discount {
                    font-size: ${Variables.Body_1};
                    color: ${Variables.PrimaryColor};
                    font-weight: ${Variables.R_Medium};
                }
            }
            .RatingsContainer {
                width: fit-content;
                background-color: ${Variables.PrimaryColor};
                color: ${Variables.TextColorWhite};
                font-size: ${Variables.Body_2};
                padding: 3px 5px 3px 7px;
                display: flex;
                align-items: center;
                border-radius: 10px;
                margin-top: 12px;
                svg {
                    margin-left: 3px;
                }
            }
            .FreeDeliveryTag {
                display: flex;
                align-items: center;
                margin-top: 15px;
                column-gap: 5px;
                color: ${Variables.TextColorGray};
                font-size: ${Variables.Body_1};
            }
        }
    }
`;
export const Thumbnail = styled.div`
    background-image: url(${(props) => props.url});
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: white;
`;
