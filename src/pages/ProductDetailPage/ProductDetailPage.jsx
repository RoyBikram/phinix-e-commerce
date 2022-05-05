import React from "react";
import {
    ProductDetailPageContainer,
    ImageContainer,
    DetailContainer,
} from "./ProductDetailPageStyle";
import { ReactComponent as CheckIcon } from "../../res/icons/check-small.svg";
import Button from "@mui/material/Button";
// import LoadingButton from '@material-ui/lab/LoadingButton';
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import ProductImgSlider from "../../components/ProductImgSlider/ProductImgSlider";
import { useEffect } from "react";
import { GetProductDataFromUid } from "../../firebase/Firebase";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingPage from "../LoadingPage/LoadingPage";
import { AddProductToCard } from "../../firebase/Firebase";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { setPendingOrder } from "../../redux/OrderReducer/OrderReducer";

export default function ProductDetailPage() {
    const Params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ProductData, SetProductData] = useState(null);
    const [IsLoading, SetIsLoading] = useState(true);
    const [ButtonLoading, SetButtonLoading] = useState(false);
    const UserUid = useSelector((state) => {
        return state.User?.UserData?.uid;
    });
    const UserAddress = useSelector((state) => {
        return state.User.UserAddress?.Address;
    });
    useEffect(() => {
        if (ProductData) {
            SetIsLoading(false);
        }
    }, [ProductData]);

    useEffect(() => {
        const AsyncFunc = async () => {
            const FetchedProductData = await GetProductDataFromUid(
                Params.productid
            );
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
        const Data = [
            {
                [UserUid]: {
                    quantity: 1,
                    name: ProductData.name,
                    price: ProductData.price,
                    rating: ProductData.rating,
                    image: ProductData.images[0],
                },
            },
        ];

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
            {IsLoading ? (
                <LoadingPage />
            ) : (
                <ProductDetailPageContainer>
                    <ImageContainer>
                        <ProductImgSlider
                            images={ProductData.images}
                        ></ProductImgSlider>
                    </ImageContainer>
                    <DetailContainer>
                        <div className="ContentContainer">
                            <div className="SubTitle">
                                {ProductData.Category}
                            </div>
                            <div className="Title">{ProductData?.name}</div>
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
                                    onClick={HandelBuyNow}
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
                                    }}
                                >
                                    Buy Now
                                </Button>
                                <Box sx={{ position: "relative" }}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            width: "165px",
                                            height: "60px",
                                            borderRadius: "0px",
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
                                            ? Object.keys(
                                                  ProductData.features
                                              ).map((each, index) => {
                                                  return (
                                                      <div
                                                          key={index}
                                                          className="Key"
                                                      >
                                                          {each}
                                                      </div>
                                                  );
                                              })
                                            : ""}
                                    </div>
                                    <div className="ValuesContainer">
                                        {ProductData
                                            ? Object.values(
                                                  ProductData.features
                                              ).map((each, index) => {
                                                  return (
                                                      <div
                                                          key={index}
                                                          className="Value"
                                                      >
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
