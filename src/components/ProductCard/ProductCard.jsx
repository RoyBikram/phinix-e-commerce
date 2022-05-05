import React, { useEffect, useState } from "react";
import { ReactComponent as CheckIcon } from "../../res/icons/check-small.svg";
import { ProductCardContainer, Thumbnail } from "./ProductCardStyle";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import StarIcon from "@mui/icons-material/Star";
import { Link, useNavigate } from "react-router-dom";
import { GetProductDataFromUid } from "../../firebase/Firebase";
import CircularProgress from "@mui/material/CircularProgress";
import { AddProductToCard } from "../../firebase/Firebase";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import { setPendingOrder } from "../../redux/OrderReducer/OrderReducer";

export default function ProductCard({ uid }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ProductData, SetProductData] = useState(null);
    const [ButtonLoading, SetButtonLoading] = useState(false);
    const UserUid = useSelector((state) => {
        return state.User?.UserData?.uid;
    });
    const UserAddress = useSelector((state) => {
        return state.User.UserAddress?.Address;
    });
    useEffect(() => {
        const AsyncFunc = async () => {
            const FetchedProductData = await GetProductDataFromUid(uid);
            SetProductData(FetchedProductData);
        };
        AsyncFunc();
    }, []);

    const HandelAddToCard = async () => {
        SetButtonLoading(true);
        await AddProductToCard(UserUid, ProductData);
        SetButtonLoading(false);
    };

    const HandelBuyNow = async () => {
        const Data = [{[uid]:{
            quantity: 1,
            name: ProductData.name,
            price: ProductData.price,
            rating: ProductData.rating,
            image: ProductData.images[0],
        }}];

        dispatch(
            setPendingOrder({
                ProductData: Data,
                Value: ProductData.price.currentPrice,
            })
        );
        if (UserAddress) {
            navigate("/order_summary");
        } else {
            navigate("/shipping_address");
        }
    };

    return (
        <>
            {!ProductData ? (
                <ProductCardContainer
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <CircularProgress color="inherit" />
                </ProductCardContainer>
            ) : (
                <ProductCardContainer>
                    <Link to={`/${ProductData.uid}`} className="MainContainer">
                        <div className="ThumbnailContainer">
                            <Thumbnail url={ProductData.images[0]}></Thumbnail>
                        </div>
                        <div className="DescriptionContainer">
                            <div className="Title">{ProductData.name}</div>
                            <div className="PriceContainer">
                                <div className="CurrentPrice">{`$${ProductData?.price.currentPrice}`}</div>
                                <div className="OriginalPrice">{`$${ProductData?.price.originalPrice}`}</div>
                                <div className="Discount">{`${Math.ceil(
                                    ((ProductData?.price.originalPrice -
                                        ProductData?.price.currentPrice) *
                                        100) /
                                        ProductData?.price.originalPrice
                                )}%`}</div>
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
                            onClick={HandelBuyNow}
                            sx={{
                                width: "50%",
                                height: "60px",
                                borderRadius: "0",
                                fontSize: "15px",
                            }}
                        >
                            Buy Now
                        </Button>

                        <Box sx={{ width: "50%", position: "relative" }}>
                            <Button
                                variant="contained"
                                sx={{
                                    width: "100%",
                                    height: "60px",
                                    borderRadius: "0",
                                    backgroundColor: "#ff8282",
                                    fontSize: "15px",
                                    boxShadow: "none",
                                    ":hover": {
                                        boxShadow: "none",

                                        backgroundColor: "#f57b7b",
                                    },
                                }}
                                disabled={ButtonLoading}
                                onClick={HandelAddToCard}
                            >
                                Add to Card
                            </Button>
                            {ButtonLoading && (
                                <CircularProgress
                                    size={24}
                                    sx={{
                                        color: "primary",
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        marginTop: "-12px",
                                        marginLeft: "-12px",
                                    }}
                                />
                            )}
                        </Box>
                    </ButtonGroup>
                </ProductCardContainer>
            )}
        </>
    );
}
