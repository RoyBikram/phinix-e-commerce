import React, { useState, useEffect,useRef } from "react";
import { CardPageProductContainer, Thumbnail } from "./CardPageProductStyle";
import IconButton from "@mui/material/IconButton";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import StarIcon from "@mui/icons-material/Star";
import { useSelector } from "react-redux";
import { GetProductDataFromUid } from "../../firebase/Firebase";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { red } from "@mui/material/colors";
import { green } from "@mui/material/colors";
import {DecreaseCardProductQuantity,IncreaseCardProductQuantity,DeleteCardProduct} from '../../firebase/Firebase'

export default function CardPageProduct({ data }) {
    const ProductUid = Object.keys(data)[0];
    const Quantity = data[ProductUid].quantity;
    const UserUid = useSelector((state) => {
        return state.User?.UserData?.uid;
    });
    const SelectedProduct = useRef()
    const [ProductData, SetProductData] = useState(null);
    const [DecreaseButtonLoading, SetDecreaseButtonLoading] = useState(false);
    const [IncreaseButtonLoading, SetIncreaseButtonLoading] = useState(false);
    const [DecreaseButtonDisabled, SetDecreaseButtonDisabled] = useState(false);
    const [IncreaseButtonDisabled, SetIncreaseButtonDisabled] = useState(false);
    const [IsLoading,SetIsLoading]= useState(true)
    useEffect(() => {
        switch (true) {
            case (Quantity === 1):
                SetDecreaseButtonDisabled(true)
                break;
            case (Quantity === 5):
                SetIncreaseButtonDisabled(true)
                break;
            case (1 < Quantity < 10):
                SetDecreaseButtonDisabled(false)
                SetIncreaseButtonDisabled(false)
                break;
            default:
                break;
        }

        
        return () => {
            
        }
    }, [Quantity])

    const HandelDecreaseButton = async () => {
        SetDecreaseButtonLoading(true)
        await DecreaseCardProductQuantity(UserUid,ProductUid)
        SetDecreaseButtonLoading(false)
    }
    const HandelIncreaseButton = async () => {
        SetIncreaseButtonLoading(true)
        await IncreaseCardProductQuantity(UserUid,ProductUid)
        SetIncreaseButtonLoading(false)
    }
    const HandelDeleteButton = async () => {
        await DeleteCardProduct(UserUid, ProductUid)
        // SelectedProduct.current.style.display = "none";
    }

    useEffect(() => {
        const AsyncFunc = async () => {
            SetIsLoading(true)
            const FetchedProductData = await GetProductDataFromUid(ProductUid);
            SetProductData(FetchedProductData);
            SetIsLoading(false)
        };
        AsyncFunc();
    }, [ProductUid]);

    return (
        <>
            {IsLoading ? (
                <CardPageProductContainer
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <CircularProgress color="inherit" />
                </CardPageProductContainer>
            ) : (
                <CardPageProductContainer ref={SelectedProduct}>
                    <div className="RightSide">
                        <Thumbnail url={ProductData.images[0]}></Thumbnail>
                    </div>
                    <div className="LeftSide">
                        <div className="DetailsContainer">
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
                        </div>
                        <div className="Controller">
                            <Box sx={{ position: "relative" }}>
                                <IconButton disabled={DecreaseButtonDisabled} onClick={HandelDecreaseButton} aria-label="save">
                                    <RemoveRoundedIcon />
                                </IconButton>
                                {DecreaseButtonLoading && (
                                    <CircularProgress
                                        size={36}
                                        sx={{
                                            color: red[300],
                                            position: "absolute",
                                            top: 2,
                                            left: 2,
                                            zIndex: 1,
                                        }}
                                    />
                                )}
                            </Box>
                            <div className="Quantity">{Quantity}</div>
                            <Box sx={{ position: "relative" }}>
                                <IconButton disabled={IncreaseButtonDisabled} onClick={HandelIncreaseButton} aria-label="save">
                                    <AddRoundedIcon />
                                </IconButton>
                                {IncreaseButtonLoading && (
                                    <CircularProgress
                                        size={36}
                                        sx={{
                                            color: green[300],
                                            position: "absolute",
                                            top: 2,
                                            left: 2,
                                            zIndex: 1,
                                        }}
                                    />
                                )}
                            </Box>
                            <Box sx={{ position: "relative" }}>
                                <IconButton onClick={HandelDeleteButton}>
                                    <DeleteRoundedIcon color={"primary"} />
                                </IconButton>
                            </Box>
                        </div>
                    </div>
                </CardPageProductContainer>
            )}
        </>
    );
}
