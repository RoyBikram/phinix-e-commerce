import styled from "styled-components";

import { Variables } from "../../variables/variables";

export const ProductDetailPageContainer = styled.div`
    display: flex;
    width: 100%;
    border-radius: 24px;
    background-color: ${Variables.BackgroundGray};
`;
export const DetailContainer = styled.div`
    width: 50%;
    padding: 100px 0;
    .ContentContainer {
        max-width: 400px;
        .SubTitle {
            /* font-size: ${Variables.Title_2}; */
            color: ${Variables.TextColorGray};
        }
        .Title {
            font-size: ${Variables.Title_1};
            font-weight: ${Variables.R_Medium};
            margin-top: 10px;
        }
        .PriceContainer {
            display: flex;
            align-items: flex-end;
            font-weight: ${Variables.R_Medium};
            margin-top: 10px;
            column-gap: 7px;
            .CurrentPrice {
                font-size: ${Variables.Title_1};
                line-height: ${Variables.Title_1};
            }
            .OriginalPrice {
                color: ${Variables.TextColorGray};
                text-decoration-line: line-through;
            }
            .Discount {
                color: ${Variables.PrimaryColor};
            }
        }
        .RatingContainer {
            display: flex;
            margin-top: 10px;
            align-items: flex-end;
        .Rating {
            .css-ryrseu-MuiRating-root {
                color: #fda110;
            }
        }
        .RatingValue {
                width: fit-content;
                background-color: ${Variables.PrimaryColor};
                color: ${Variables.TextColorWhite};
                font-size: ${Variables.Body_2};
                padding: 3px 5px 3px 7px;
                display: flex;
                align-items: center;
                border-radius: 10px;
                height: fit-content;
                margin-left: 10px;
                svg {
                    margin-left: 3px;
                }
            }

        }
        .DeliveryTag {
            display: flex;
            align-items: center;
            font-size: ${Variables.Body_1};
            color: ${Variables.TextColorGray};
            margin-top: 10px;
            svg {
                margin-right: 5px;
            }
        }
        .ButtonContainer {
            display: flex;
            justify-content: space-between;
            margin-top: 40px;
        }
        .DescriptionContainer {
            margin-top: 30px;

            .Title {
                font-size: ${Variables.Title_3};
                color: ${Variables.TextColorGray};
                font-weight: ${Variables.R_Regular};
            }
            .Description {
                margin-top: 10px;
                color: ${Variables.TextColorGray};
                font-size: ${Variables.Body_1};
            }
        }
        .FeaturesContainer {
            margin-top: 30px;

            .Title {
                font-size: ${Variables.Title_3};
                color: ${Variables.TextColorGray};
                font-weight: ${Variables.R_Regular};
            }
            .Container {
                margin-top: 10px;
                display: flex;
                color: ${Variables.TextColorGray};

                .KeysContainer {
                    min-width: 200px;
                    .Key {
                        margin-bottom: 10px;
                        padding-left: 20px;
                        position: relative;
                        &::before {
                            content: "";
                            width: 7px;
                            height: 7px;
                            border-radius: 50%;
                            background-color: ${Variables.PrimaryColor};
                            position: absolute;
                            left: 0;
                            top: 5px;
                            z-index: 10;
                            box-shadow: 0px 0px 2px 4px #ff828285;
                        }
                    }
                }
                .ValuesContainer {
                    margin-top: 1px;
                    .Value {
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }
`;
export const ImageContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    padding-top: 100px;
`;
