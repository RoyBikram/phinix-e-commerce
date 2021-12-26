import styled from 'styled-components'
import {Variables} from '../../variables/variables'



export const PriceDetailsCardContainer = styled.div`
`

export const PriceDetails = styled.div`
/* height: 300px; */
width: 300px;
margin-left: auto;
position: sticky;
top: 150px;
background-color: white;
border-radius: 24px;
padding: 20px;
&::before {
    content: "";
    background-color: rgb(245,245,245);
    height: 2px;
    width: 100%;
    position: absolute;
    left: 0;
    top: 60px;
} 
.MainTitle {
    width: 100%;
    font-size: ${Variables.Title_3};
    color: ${Variables.TextColorGray};
    text-align: center;
    margin-bottom: 50px;
}
.TotalPriceContainer {
    display: flex;
    justify-content: space-between;
    .Title {
        /* font-size: ${Variables.Body_1}; */
        color: ${Variables.TextColorBlack};
    margin-bottom: 40px;

    }
}
.DeliveryChargeContainer {
    display: flex;
    justify-content: space-between;
    .Title {
        /* font-size: ${Variables.Body_1}; */
        color: ${Variables.TextColorBlack};
    margin-bottom: 40px;

    }
    .Amount {
        color: ${Variables.PrimaryColor};
    }
}
`