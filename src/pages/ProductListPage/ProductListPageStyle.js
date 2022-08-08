import styled from 'styled-components'

export const ProductListPageContainer = styled.div`

`
export const ProductsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 25px;
    @media only screen and (max-width: 1100px) {
        flex-wrap: wrap;
    }
`

