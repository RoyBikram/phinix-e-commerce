import React from "react";
import { PriceDetailsCardContainer, PriceDetails } from './PriceDetailsCardStyle'
import Button from "@mui/material/Button";


export default function PriceDetailsCard({CardValue,HandelButtonClick,ButtonLabel}) {
    return (
        <PriceDetailsCardContainer>
            <PriceDetails>
                <div className="MainTitle">Price Details</div>
                <div className="TotalPriceContainer">
                    <div className="Title">Total Price</div>
                    <div className="Amount">${CardValue}</div>
                </div>
                <div className="DeliveryChargeContainer">
                    <div className="Title">Delivery Charge</div>
                    <div className="Amount">Free</div>
                </div>
                <Button
                    onClick={HandelButtonClick}
                    variant="contained"
                    sx={{
                        width: "100%",
                        height: "60px",
                        borderRadius: "12px",
                        fontSize: "15px",
                        boxShadow: "none",
                        ":hover": {
                            boxShadow: "none",
                        },
                    }}
                >
                    {ButtonLabel}
                </Button>
            </PriceDetails>
        </PriceDetailsCardContainer>
    );
}
