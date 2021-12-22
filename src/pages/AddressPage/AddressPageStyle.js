import styled from 'styled-components'
import { Variables } from '../../variables/variables'

export const AddressPageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
padding-bottom: 100px;
border-radius: 24px;
`
export const GridContainer = styled.div`
    width: 100%;
    max-width: 800px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10%;
    /* margin: 0px auto; */
`