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
import {loadStripe} from '@stripe/stripe-js'



export default function OrderSummaryPage() {
    const UserAddress = useSelector((state) => {
        return state.User.UserAddress?.Address;
    });
    const UserUid = useSelector((state) => {
        return state.User.UserData?.uid;
    });

    const navigate = useNavigate();

    const Data = useSelector((state) => {
        return state.Order.PendingOrder;
    });
    const Products = Data?.ProductData;
    const Value = Data?.Value;

    const HandelConfirmOrder = async () => {
        const ProductsForCheckout = []
        Products.forEach((Product) => {
            const ProductObj = {}
            const ProductUid = Object.keys(Product)[0]
            ProductObj.productId = ProductUid
            ProductObj.quantity = Product[ProductUid].quantity
            ProductObj.name = Product[ProductUid].name
            ProductObj.image = Product[ProductUid].image
            ProductObj.rating = Product[ProductUid].rating
            ProductsForCheckout.push(ProductObj)
        })
        // const checkoutSession = await fetch("http://localhost:8000/create-checkout-session", {
        const checkoutSession = await fetch("https://phinix-ecommerce-backend.herokuapp.com/create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                UserUid: UserUid,
                UserAddress:UserAddress,
                Products: ProductsForCheckout
            })
        }).then((res) => {
            console.log(res)
            return res.json()
        }).catch((e) => {
            console.log(e.message)
        })
        try {
            const stripPromise = await loadStripe("pk_test_51KBF36SHN4wBX0ddkicnl9tpTDVNEqUttP3yemBTrQHoXUchADbnwdiWkgOatsxeB900H3npHftxtE5ZbnPtLdOB00etXPHFoz")
            const result = await stripPromise.redirectToCheckout({
                sessionId:checkoutSession.id
            })
            
        } catch (error) {
            console.log(error.message)
        }
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
