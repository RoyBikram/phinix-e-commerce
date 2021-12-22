import React from "react";
import {
    ProductDetailPageContainer,
    ImageContainer,
    DetailContainer,
} from "./ProductDetailPageStyle";
import { ReactComponent as CheckIcon } from "../../res/icons/check-small.svg";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import ProductImgSlider from '../../components/ProductImgSlider/ProductImgSlider'

export default function ProductDetailPage() {
    return (
        <ProductDetailPageContainer>
            <ImageContainer>
                <ProductImgSlider></ProductImgSlider>
            </ImageContainer>
            <DetailContainer>
                <div className="ContentContainer">
                    <div className="SubTitle">Earphone</div>
                    <div className="Title">Beats Studio Earphone</div>
                    <div className="PriceContainer">
                        <div className="CurrentPrice">$100</div>
                        <div className="OriginalPrice">$150</div>
                        <div className="Discount">25%</div>
                    </div>
                    <div className="RatingContainer">
                        <Rating
                            className="Rating"
                            name="half-rating-read"
                            defaultValue={4.5}
                            precision={0.5}
                            readOnly
                        />
                        <div className="RatingValue">
                            4.5
                            <StarIcon sx={{ fontSize: 13 }}></StarIcon>
                        </div>
                    </div>
                    <div className="DeliveryTag">
                        <CheckIcon /> Free Delivery
                    </div>
                    <div className="ButtonContainer">
                        <Button
                            variant="contained"
                            sx={{
                                width: "165px",
                                height: "60px",
                                borderRadius: "0px",
                                fontSize: "15px",
                                boxShadow: "none",
                                ":hover": {
                                    boxShadow: "none",
                                },
                                // color: "#fff"
                            }}
                        >
                            Buy Now
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                width: "165px",
                                height: "60px",
                                borderRadius: "0px",
                                backgroundColor: "#ff8282",
                                fontSize: "15px",
                                // color: "#fff",
                                boxShadow: "none",
                                ":hover": {
                                    boxShadow: "none",

                                    backgroundColor: "#f57b7b",
                                },
                            }}
                        >
                            Add To Card
                        </Button>
                    </div>
                    <div className="DescriptionContainer">
                        <div className="Title">Description</div>
                        <div className="Description">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Veniam rem aperiam dolorem ipsa error vitae
                            ratione nulla itaque expedita, laborum nisi
                            possimus, debitis a libero tempora nihil id
                            molestiae ex.vitae ratione nulla itaque expedita,
                            laborum nisi possimus, debitis a libero tempora
                            nihil id molestiae ex.
                        </div>
                    </div>
                    <div className="FeaturesContainer">
                        <div className="Title">Features</div>
                        <div className="Container">
                            <div className="KeysContainer">
                                <div className="Key">Name</div>
                                <div className="Key">Name</div>
                                <div className="Key">Name</div>
                                <div className="Key">Name</div>
                                <div className="Key">Name</div>
                                <div className="Key">Name</div>
                                <div className="Key">Name</div>
                                <div className="Key">Name</div>
                            </div>
                            <div className="ValuesContainer">
                                <div className="Value">Details</div>
                                <div className="Value">Details</div>
                                <div className="Value">Details</div>
                                <div className="Value">Details</div>
                                <div className="Value">Details</div>
                                <div className="Value">Details</div>
                                <div className="Value">Details</div>
                                <div className="Value">Details</div>
                            </div>
                        </div>
                    </div>
                </div>
            </DetailContainer>
        </ProductDetailPageContainer>
    );
}
