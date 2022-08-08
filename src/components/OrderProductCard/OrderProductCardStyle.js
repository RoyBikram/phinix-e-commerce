import styled from 'styled-components'
import {Variables} from '../../variables/variables'

export const OrderProductCardContainer = styled.div`
height: 170px;
width: 100%;
max-width: 450px;
border-radius: 24px;
background-color: ${Variables.BackgroundGray};
display: flex;
padding: 15px;
column-gap: 4%;
.LeftSide {
    width: 49%;
    height: 100%;
    background-color: white;
    border-radius: 12px;
    overflow: hidden;
    padding: 15px;
}
.RightSide {
    width: 47%;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
        .Title {
                margin-top: 10px;
                font-size: ${Variables.Title_2};
                line-height: ${Variables.Title_2};
                font-weight: ${Variables.R_Medium};
            }
            .PriceContainer {
                display: flex;
                margin-top: 15px;
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
            .LowerContainer {
                display: flex;
                align-items: center;
                margin-top: 15px;
                justify-content: space-between;

            .RatingsContainer {
                width: fit-content;
                background-color: ${Variables.PrimaryColor};
                color: ${Variables.TextColorWhite};
                font-size: ${Variables.Body_2};
                padding: 3px 5px 3px 7px;
                display: flex;
                align-items: center;
                border-radius: 10px;
                svg {
                    margin-left: 3px;
                }
            }
            .QuantityContainer {
                margin-right: 15px;
                font-size: ${Variables.Body_1};
                color: ${Variables.TextColorGray};
            }
            }
}
@media only screen and (max-width: 600px) {
       
       margin: 0 auto;
       height: 170px;
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