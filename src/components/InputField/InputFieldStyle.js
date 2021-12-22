import styled from 'styled-components'
import { Variables } from '../../variables/variables'

export const InputFieldContainer = styled.div`
width: 100%;
margin-top: 20px;
margin-bottom: 20px;
label {
    font-weight: ${Variables.R_Medium};
    display: flex;
    margin-left: 5px;
}
input {
    outline: none;
    border: none;
    margin-top: 10px;
    width: 100%;
    border: 1px solid ${Variables.BackgroundGray};
    padding: 12px 10px;
    border-radius: 25px;
    font-size: ${Variables.Body_1};
}

`