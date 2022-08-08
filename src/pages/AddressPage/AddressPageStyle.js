import styled from 'styled-components'

export const AddressPageContainer = styled.form`
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
padding-bottom: 100px;
border-radius: 24px;
padding-left: 50px;
padding-right: 50px;
`
export const GridContainer = styled.div`
    width: 100%;
    max-width: 800px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10%;
    @media only screen and (max-width: 800px) {
    grid-column-gap: 4%;
    }
    @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    }
    input {
        padding: 14px 12px;
    }
    /* margin: 0px auto; */
`