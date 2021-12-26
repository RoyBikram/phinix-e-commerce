import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { OrderProductCardContainer, Thumbnail } from "./OrderProductCardStyle";

export default function OrderProductCard({ data }) {
    const ProductUid = Object.keys(data)[0];
    const Quantity = data[ProductUid].quantity;
    return (
        <OrderProductCardContainer>
            <div className="LeftSide">
                <Thumbnail url={data[ProductUid].image}></Thumbnail>
            </div>
            <div className="RightSide">
                <div className="Title">{data[ProductUid].name}</div>
                <div className="PriceContainer">
                    <div className="CurrentPrice">{`$${data[ProductUid]?.price.currentPrice}`}</div>
                    <div className="OriginalPrice">{`$${data[ProductUid]?.price.originalPrice}`}</div>
                    <div className="Discount">{`${Math.ceil(
                        ((data[ProductUid]?.price.originalPrice -
                            data[ProductUid]?.price.currentPrice) *
                            100) /
                            data[ProductUid]?.price.originalPrice
                    )}%`}</div>
                </div>
                <div className="LowerContainer">
                    <div className="RatingsContainer">
                        {data[ProductUid].rating}
                        <StarIcon sx={{ fontSize: 13 }}></StarIcon>
                    </div>
                    <div className="QuantityContainer">
                        Quantity : {Quantity}
                    </div>
                </div>
            </div>
        </OrderProductCardContainer>
    );
}
