import React from "react";
import {
    CardPageContainer,
    ProductListContainer,
    Product,
    PriceDetailsContainer,
    PriceDetails,
    MainContainer,
} from "./CardPageStyle";
import IconButton from '@mui/material/IconButton';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import Button from "@mui/material/Button";
import Heading from "../../components/Heading/Heading";
import StarIcon from "@mui/icons-material/Star";
import {useNavigate} from 'react-router-dom'

export default function CardPage() {
    const navigate = useNavigate()
    const HandelPlaceOrderClick = () => {
        navigate("/shipping_address")
    }





    return (
        <CardPageContainer>
            <Heading
                mainHeading="My Card"
                subHeading="You are few step away to make these yours"
            ></Heading>
            <MainContainer>
                <ProductListContainer>
                    <Product>
                        <div className="RightSide">
                            <div className="ImageContainer"></div>
                        </div>
                        <div className="LeftSide">
                            <div className="DetailsContainer">
                                <div className="Title">Boat Studio One</div>
                                <div className="PriceContainer">
                                    <div className="CurrentPrice">$100</div>
                                    <div className="OriginalPrice">$150</div>
                                    <div className="Discount">25%</div>
                                </div>
                                <div className="RatingsContainer">
                                    4.5
                                    <StarIcon sx={{ fontSize: 13 }}></StarIcon>
                                </div>
                            </div>
                            <div className="Controller">
                                <IconButton aria-label="decrease">
                                    <RemoveRoundedIcon/>
                                </IconButton>
                                <div className="Quantity">5</div>
                                <IconButton aria-label="increase">
                                    <AddRoundedIcon/>
                                </IconButton>
                                <IconButton aria-label="delete">
                                    <DeleteRoundedIcon color={"primary"}/>
                                </IconButton>
                            </div>
                        </div>
                    </Product>
                    <Product>
                        <div className="RightSide">
                            <div className="ImageContainer"></div>
                        </div>
                        <div className="LeftSide">
                            <div className="DetailsContainer">
                                <div className="Title">Boat Studio One</div>
                                <div className="PriceContainer">
                                    <div className="CurrentPrice">$100</div>
                                    <div className="OriginalPrice">$150</div>
                                    <div className="Discount">25%</div>
                                </div>
                                <div className="RatingsContainer">
                                    4.5
                                    <StarIcon sx={{ fontSize: 13 }}></StarIcon>
                                </div>
                            </div>
                            <div className="Controller">
                                <IconButton aria-label="decrease">
                                    <RemoveRoundedIcon/>
                                </IconButton>
                                <div className="Quantity">5</div>
                                <IconButton aria-label="increase">
                                    <AddRoundedIcon/>
                                </IconButton>
                                <IconButton aria-label="delete">
                                    <DeleteRoundedIcon color={"primary"}/>
                                </IconButton>
                            </div>
                        </div>
                    </Product>
                    <Product>
                        <div className="RightSide">
                            <div className="ImageContainer"></div>
                        </div>
                        <div className="LeftSide">
                            <div className="DetailsContainer">
                                <div className="Title">Boat Studio One</div>
                                <div className="PriceContainer">
                                    <div className="CurrentPrice">$100</div>
                                    <div className="OriginalPrice">$150</div>
                                    <div className="Discount">25%</div>
                                </div>
                                <div className="RatingsContainer">
                                    4.5
                                    <StarIcon sx={{ fontSize: 13 }}></StarIcon>
                                </div>
                            </div>
                            <div className="Controller">
                                <IconButton aria-label="decrease">
                                    <RemoveRoundedIcon/>
                                </IconButton>
                                <div className="Quantity">5</div>
                                <IconButton aria-label="increase">
                                    <AddRoundedIcon/>
                                </IconButton>
                                <IconButton aria-label="delete">
                                    <DeleteRoundedIcon color={"primary"}/>
                                </IconButton>
                            </div>
                        </div>
                    </Product>
                    <Product>
                        <div className="RightSide">
                            <div className="ImageContainer"></div>
                        </div>
                        <div className="LeftSide">
                            <div className="DetailsContainer">
                                <div className="Title">Boat Studio One</div>
                                <div className="PriceContainer">
                                    <div className="CurrentPrice">$100</div>
                                    <div className="OriginalPrice">$150</div>
                                    <div className="Discount">25%</div>
                                </div>
                                <div className="RatingsContainer">
                                    4.5
                                    <StarIcon sx={{ fontSize: 13 }}></StarIcon>
                                </div>
                            </div>
                            <div className="Controller">
                                <IconButton aria-label="decrease">
                                    <RemoveRoundedIcon/>
                                </IconButton>
                                <div className="Quantity">5</div>
                                <IconButton aria-label="increase">
                                    <AddRoundedIcon/>
                                </IconButton>
                                <IconButton aria-label="delete">
                                    <DeleteRoundedIcon color={"primary"}/>
                                </IconButton>
                            </div>
                        </div>
                    </Product>
                    
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
    );
}
