import React, { useEffect, useState } from "react";
import { ReactComponent as CheckIcon } from "../../res/icons/check-small.svg";
import { ProductCardContainer, Thumbnail } from "./ProductCardStyle";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import StarIcon from "@mui/icons-material/Star";
import { Link,useNavigate } from "react-router-dom";
import { GetProductDataFromUid } from "../../firebase/Firebase";
import CircularProgress from '@mui/material/CircularProgress';


export default function ProductCard({ uid }) {
    const navigate = useNavigate()
    const [ProductData, SetProductData] = useState(null);

    useEffect(() => {
        const AsyncFunc = async () => {
            const FetchedProductData = await GetProductDataFromUid(uid);
            SetProductData(FetchedProductData);
        };
        AsyncFunc();
    }, []);

    return (
        <>
            {(!ProductData) ? (
                (<ProductCardContainer style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <CircularProgress color="inherit"/>
                </ProductCardContainer>)
            ) : (
                <ProductCardContainer>
                    <Link to={`/${ProductData.uid}`} className="MainContainer">
                        <div className="ThumbnailContainer">
                            <Thumbnail
                                url={
                                    ProductData.images[0]
                                }
                            ></Thumbnail>
                        </div>
                        <div className="DescriptionContainer">
                                <div className="Title">{ ProductData.name}</div>
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
                            <div className="RatingsContainer">
                                {ProductData.rating}
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
                                },
                            }}
                        >
                            Add To Card
                        </Button>
                    </ButtonGroup>
                </ProductCardContainer>
            )}
        </>
    );
}
