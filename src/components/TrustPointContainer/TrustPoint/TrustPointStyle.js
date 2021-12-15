import styled from 'styled-components'
import { Variables } from '../../../variables/variables'

export const StyledTrustPoint = styled.div`
    /* height: 100px; */
    display: flex;
    /* background-color: #e2e2e2; */
    padding: 12px 17px;
    align-items: center;
    border-radius: 10px;
    /* border: 2px solid #e2e2e2; */
    /* column-gap: 5%; */
    img {
        display: inline-block;
        margin-right: 17px;
        height: 70%;
    }
`
export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const Title = styled.div`
    font-weight: ${Variables.R_Medium};
`
export const Description = styled.div`
    color: ${Variables.TextColorGray};
    font-size: ${Variables.Body_1};
    margin-top: 5px;

    /* font-size: ${Variables.Body_2}; */
`