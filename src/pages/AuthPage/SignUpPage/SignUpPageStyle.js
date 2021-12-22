import styled from 'styled-components'
import { Variables } from '../../../variables/variables'
import LoginImg from "../../../res/img/LoginImg.jpg";


export const SignUpPageContainer = styled.div`
 width: 1000px;
    height: 650px;
    background-color: white;
    display: flex;
`
export const MainContent = styled.div`
width: 50%;
    display: grid;
    place-items: center;
    .FormContainer {
        width: 300px;
        position: relative;
        form {
            font-size: ${Variables.Body_1};

            .Title {
                font-size: ${Variables.Display_5};
                font-weight: ${Variables.R_Medium};
                color: ${Variables.TextColorBlack};
            }

            .SubTitle {
                color: ${Variables.TextColorGray};
                margin-top: 15px;
            }
            .SignUpWithGoogle {
                padding-top: 7px;
                padding-bottom: 7px;
                margin-top: 35px;
                width: 100%;
                border: 1px solid ${Variables.BackgroundGray};
                svg {
                    height: 27px;
                }
                box-shadow: none;
                ::hover {
                    box-shadow: none;
                }
            }
            .Divider {
                width: 100%;
                margin: 25px auto;
                display: grid;
                place-items: center;
                position: relative;
                .bar {
                        /* content: ""; */
                        height: 2px;
                        width: 100%;
                        background-color: red;
                        position: absolute;
                        left: 0;
                        bottom: 5px;
                        z-index: 1;
                    }
                span {
                width: fit-content;
                color: ${Variables.TextColorGray};
                font-size: ${Variables.Body_2};
                padding: 0px 15px;
                z-index: 2;
                background-color: white;
                    
                }
                
            }
            .SignUpLinkContainer {
                color: ${Variables.TextColorBlack};
                font-weight: ${Variables.R_Medium};
                margin-top: 20px;
                text-align: center;
                a {
                    margin-left: 5px;
                }
            }
        }
    }
`
export const ImageContainer = styled.div`
width: 50%;
   background-image: url(${LoginImg});
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
`