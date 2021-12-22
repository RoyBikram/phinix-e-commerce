import React from "react";
import { ConfirmOrderPageContainer } from "./ConfirmOrderPageStyle";
import ConfirmOrderVideo from "../../res/video/ConfirmOrder.mp4";
import Button from "@mui/material/Button";
import {useNavigate} from 'react-router-dom'


export default function ConfirmOrderPage() {


    const navigate = useNavigate()

    const HandelButtonClick = () => {
        navigate("/")
    }


    return (
        <ConfirmOrderPageContainer>
            <div className="Heading">Thanks For Shopping</div>
            <div className="VideoContainer">
                <video autoPlay muted>
                    <source src={ConfirmOrderVideo} type="video/mp4" />
                </video>
            </div>
            <Button
                onClick={HandelButtonClick}
                variant="contained"
                sx={{
                    width: "250px",
                    height: "60px",
                    borderRadius: "12px",
                    fontSize: "15px",
                    boxShadow: "none",
                    ":hover": {
                        boxShadow: "none",
                    },
                }}
            >
                Continue Shopping
            </Button>
        </ConfirmOrderPageContainer>
    );
}
