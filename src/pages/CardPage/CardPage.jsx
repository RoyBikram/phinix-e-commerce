import React from "react";
import {
    CardPageContainer,
    ProductListContainer,
    Product,
    PriceDetailsContainer,
    PriceDetails,
    MainContainer,
} from "./CardPageStyle";

import Button from "@mui/material/Button";
import Heading from "../../components/Heading/Heading";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CardPageProduct from "../../components/CardPageProduct/CardPageProduct";
import LoadingPage from '../../pages/LoadingPage/LoadingPage'

export default function CardPage() {
    const CardData = useSelector((state) => {
        return state.Card.CardData;
    });
    const navigate = useNavigate();

    const HandelPlaceOrderClick = () => {
        navigate("/shipping_address");
    };

    return (
        <>
            {(!CardData) ? (
                <LoadingPage/>
            ) : (
                <CardPageContainer>
                    <Heading
                        mainHeading="My Card"
                        subHeading="You are few step away to make these yours"
                    ></Heading>
                    <MainContainer>
                        <ProductListContainer>
                                {CardData.map((data, index) => {
                                // console.log(data)
                                return <CardPageProduct key={index} data={data} />;
                            })}
                        </ProductListContainer>
                        <PriceDetailsContainer>
                            <PriceDetails>
                                <div className="MainTitle">Price Details</div>
                                <div className="TotalPriceContainer">
                                    <div className="Title">Total Price</div>
                                    <div className="Amount">$740</div>
                                </div>
                                <div className="DeliveryChargeContainer">
                                    <div className="Title">Delivery Charge</div>
                                    <div className="Amount">Free</div>
                                </div>
                                <Button
                                    onClick={HandelPlaceOrderClick}
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
                                    Place Order
                                </Button>
                            </PriceDetails>
                        </PriceDetailsContainer>
                    </MainContainer>
                </CardPageContainer>
            )}
        </>
    );
}
