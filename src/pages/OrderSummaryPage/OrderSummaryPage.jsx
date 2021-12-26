import React from "react";
import {
    OrderSummaryPageContainer,
    GridContainer,
} from "./OrderSummaryPageStyle";
import OrderProductCard from "../../components/OrderProductCard/OrderProductCard";
import { useSelector } from "react-redux";
import PriceDetailsCard from "../../components/PriceDetailsCard/PriceDetailsCard";
import { useNavigate } from "react-router";
import Heading from "../../components/Heading/Heading";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

export default function OrderSummaryPage() {
    const UserAddress = useSelector((state) => {
        return state.User.UserAddress?.Address;
    });

    const navigate = useNavigate();

    const Data = useSelector((state) => {
        return state.Order.PendingOrder;
    });
    const Products = Data?.ProductData;
    const Value = Data?.Value;

    const HandelConfirmOrder = () => {
    };
    const HandelEditAddressButton = () => {
        navigate("/shipping_address")
    }

    return (
        <OrderSummaryPageContainer>
            <Heading
                mainHeading="Order Summary"
                subHeading="Take a look everything before make payment."
            />
            <div className="MainContent">
                <div className="OrderProductCard">
                    {Products.map((Product, index) => {
                        return (
                            <OrderProductCard
                                key={index}
                                data={Product}
                            ></OrderProductCard>
                        );
                    })}
                </div>
                <div className="AddressCardContainer">
                    <div className="Heading">Shipping Address</div>
                    <IconButton className="EditButton" onClick={HandelEditAddressButton}>
                        <EditIcon fontSize="small" />
                    </IconButton>
                    <div className="TopPart">
                        <div className="Name">{UserAddress.name}</div>
                        <div className="PhoneNumber">
                            {UserAddress.mobile_number}
                        </div>
                    </div>
                    <div className="BottomPart">
                        {`${UserAddress.country}, ${UserAddress.state}, ${UserAddress.district}, ${UserAddress.city_town}, ${UserAddress.landmark} - ${UserAddress.pin}`}
                    </div>
                </div>
                <PriceDetailsCard
                    className="PriceSummaryContainer"
                    CardValue={Value}
                    HandelButtonClick={HandelConfirmOrder}
                    ButtonLabel={"Confirm Order"}
                ></PriceDetailsCard>
            </div>
        </OrderSummaryPageContainer>
    );
}
