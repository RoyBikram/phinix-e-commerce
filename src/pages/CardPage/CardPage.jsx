import React from "react";
import {
    CardPageContainer,
    ProductListContainer,
    Product,
    PriceDetails,
    MainContainer,
} from "./CardPageStyle";

import Heading from "../../components/Heading/Heading";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CardPageProduct from "../../components/CardPageProduct/CardPageProduct";
import LoadingPage from '../../pages/LoadingPage/LoadingPage'
import { setPendingOrder } from '../../redux/OrderReducer/OrderReducer'
import PriceDetailsCard from '../../components/PriceDetailsCard/PriceDetailsCard'

export default function CardPage() {
    const dispatch = useDispatch()
    const CardData = useSelector((state) => {
        return state.Card.CardData;
    });
    const UserAddress = useSelector((state) => {
        return state.User.UserAddress?.Address;
    });
    const CardValue = useSelector((state) => {
        return state.Card.CardValue;
    });
    const navigate = useNavigate();

    const HandelPlaceOrderClick = () => {
        dispatch(setPendingOrder({
            ProductData: CardData,
            Value: CardValue
        }))
        if (UserAddress) {
            navigate("/order_summary"); 
        } else {
            navigate("/shipping_address"); 
        }
    };

    return (
        <>
            {(!CardData) ? (
                <LoadingPage/>
            ) : (
                <CardPageContainer>
                    <Heading
                        mainHeading="My Card"
                        subHeading="You are few step away to make these yours"
                    ></Heading>
                    <MainContainer>
                        <ProductListContainer>
                                {CardData.map((data, index) => {
                                return <CardPageProduct key={index} data={data} />;
                            })}
                        </ProductListContainer>
                            <PriceDetailsCard CardValue ={CardValue}HandelButtonClick={HandelPlaceOrderClick}ButtonLabel={"Placed Order"}></PriceDetailsCard>
                    </MainContainer>
                </CardPageContainer>
            )}
        </>
    );
}
