import styled from 'styled-components'
import {Variables} from '../../variables/variables'

export const ConfirmOrderPageContainer = styled.div`
/* height: 500px; */
width: 800px;
background-color: white;
border-radius: 24px;
margin: 0px auto;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
padding: 40px;
.Heading {
    font-size: ${Variables.Display_5};
    font-weight: ${Variables.R_Medium};
    color: ${Variables.TextColorGray};
}
.VideoContainer {
    height: 400px;
    video{
        height: 100%;
    }
}
@media only screen and (max-width: 800px) {
    width: 90%;
    padding: 20px;
    .Heading {
        font-size: 24px;
        margin-top: 50px;
    }
    .VideoContainer {
        height: 300px;
    }
}
`