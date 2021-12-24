import styled from 'styled-components'
import {Variables} from '../../variables/variables'

export const CardPageProductContainer = styled.div`
height: 246px;
width: 100%;
max-width: 630px;
border-radius: 24px;
background-color: ${Variables.BackgroundGray};
display: flex;
padding: 15px;
column-gap: 4%;
.RightSide {
    width: 49%;
    height: 100%;
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    padding: 15px;
}
.LeftSide {
    width: 47%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .DetailsContainer {
        .Title {
                margin-top: 10px;
                font-size: ${Variables.Title_2};
                line-height: ${Variables.Title_2};
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
    }
    .Controller {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        padding: 0px 10px;
        .Quantity {
            padding: 12px 25px 10px 25px;
            border-radius: 7px;
            background-color: white;
        }
    }
}
`

export const Thumbnail = styled.div`
    background-image: url(${(props) => props.url});
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: white;
`;