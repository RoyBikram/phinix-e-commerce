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
import ProductImgSlider from "../../components/ProductImgSlider/ProductImgSlider";
import { useEffect } from "react";
import { GetProductDataFromUid } from "../../firebase/Firebase";
import { useParams } from "react-router-dom";
import { useState } from "react";
import LoadingPage from '../LoadingPage/LoadingPage'

export default function ProductDetailPage() {
    const Params = useParams();
    const [ProductData, SetProductData] = useState(null);
        const [IsLoading, SetIsLoading] = useState(true)


    useEffect(() => {
        if (ProductData) {
            SetIsLoading(false) 
        }
        
    }, [ProductData])

    useEffect(() => {
        const AsyncFunc = async () => {
            const FetchedProductData = await GetProductDataFromUid(
                Params.productid
            );
            SetProductData(FetchedProductData);
        };
        AsyncFunc();
    }, []);

    return (
        <>
            {(IsLoading)?(<LoadingPage/>):(
            <ProductDetailPageContainer>
                    <ImageContainer>
                        <ProductImgSlider images={ProductData.images}></ProductImgSlider>
                </ImageContainer>
                <DetailContainer>
                    <div className="ContentContainer">
                            <div className="SubTitle">{ProductData.Category}</div>
                        <div className="Title">{ProductData?.name}</div>
                        <div className="PriceContainer">
                            <div className="CurrentPrice">{`$${ProductData?.price.currentPrice}`}</div>
                            <div className="OriginalPrice">{`$${ProductData?.price.originalPrice}`}</div>
                            <div className="Discount">{`${
                                Math.ceil(((ProductData?.price.originalPrice -
                                    ProductData?.price.currentPrice) *
                                    100) /
                                ProductData?.price.originalPrice)
                            }%`}</div>
                        </div>
                        <div className="RatingContainer">
                            <Rating
                                className="Rating"
                                name="half-rating-read"
                                defaultValue={ProductData?.rating}
                                precision={0.1}
                                readOnly
                            />
                            <div className="RatingValue">
                                {ProductData?.rating}
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
                                {ProductData?.description}
                            </div>
                        </div>
                        <div className="FeaturesContainer">
                            <div className="Title">Features</div>
                            <div className="Container">
                                <div className="KeysContainer">
                                    {ProductData
                                        ? Object.keys(ProductData.features).map(
                                              (each,index) => {
                                                  return (
                                                      <div key={index} className="Key">
                                                          {each}
                                                      </div>
                                                  );
                                              }
                                          )
                                        : ""}
                                </div>
                                <div className="ValuesContainer">
                                    {ProductData
                                        ? Object.values(
                                              ProductData.features
                                          ).map((each,index) => {
                                              return (
                                                  <div key={index} className="Value">
                                                      {each}
                                                  </div>
                                              );
                                          })
                                        : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                </DetailContainer>
            </ProductDetailPageContainer>
            )}
        </>
    );
}

