import React from "react";
import { ReactComponent as CheckIcon } from "../../res/icons/check-small.svg";
import { ProductCardContainer, Thumbnail } from "./ProductCardStyle";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import StarIcon from "@mui/icons-material/Star";
import {Link,useParams} from 'react-router-dom'

export default function ProductCard() {

    return (
        <ProductCardContainer>
            <Link to="/anyid" className="MainContainer">
                <div className="ThumbnailContainer">
                    <Thumbnail
                        url={
                            "https://rukminim1.flixcart.com/image/832/832/ktx9si80/headphone/t/z/x/mj4x3zm-a-beats-original-imag75umg9qvptyu.jpeg?q=70"
                        }
                    ></Thumbnail>
                </div>
                <div className="DescriptionContainer">
                    <div className="Title">Boat Studio Pro</div>
                    <div className="PriceContainer">
                        <div className="CurrentPrice">$100</div>
                        <div className="OriginalPrice">$150</div>
                        <div className="Discount">25%</div>
                    </div>
                    <div className="RatingsContainer">
                        4.5
                        <StarIcon sx={{ fontSize: 13 }}></StarIcon>
                    </div>
                    <div className="FreeDeliveryTag">
                        <CheckIcon className="CheckIcon"></CheckIcon>
                        Free Delivery
                    </div>
                </div>
            </Link>
            <ButtonGroup
                sx={{
                    boxShadow: "none",
                }}
                variant="contained"
                aria-label="outlined primary button group"
            >
                <Button
                    sx={{
                        width: "50%",
                        height: "60px",
                        borderTopLeftRadius: "0px",
                        borderBottomLeftRadius: "12px",
                        fontSize: "15px",
                    }}
                >
                    Buy Now
                </Button>
                <Button
                    sx={{
                        width: "50%",
                        height: "60px",
                        borderTopRightRadius: "0px",
                        borderBottomRightRadius: "12px",
                        backgroundColor: "#ff8282",
                        fontSize: "15px",
                        ":hover": {
                            backgroundColor: "#f57b7b",

                        }
                    }}
                >
                    Add To Card
                </Button>
            </ButtonGroup>
        </ProductCardContainer>
    );
}
