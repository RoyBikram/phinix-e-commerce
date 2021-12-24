import React from "react";
import {
    ProductListPageContainer,
    ProductsContainer,
} from "./ProductListPageStyle";
import { useParams } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import ProductCard from "../../components/ProductCard/ProductCard";
import TrustPointContainer from "../../components/TrustPointContainer/TrustPointContainer";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import LoadingPage from "../LoadingPage/LoadingPage";

export default function ProductListPage() {
    const { productlistid } = useParams();
    const CategoryData = useSelector((state) => {
        return state.Category.CategoryData;
    });
    // let ProductListUid = null;
    const [ProductListUid, SetProductListUid] = useState(null)
    // const [IsLoading, SetIsLoading] = useState(true);

    useEffect(() => {
        if (CategoryData) {
            switch (productlistid) {
                case "earphone":
                    SetProductListUid(CategoryData.Earphone.Products)

                    break;
                case "headphone":
                    SetProductListUid(CategoryData.Headphone.Products)

                    break;
                case "tws":
                    SetProductListUid(CategoryData.TWS.Products)

                    break;
                default:
                    console.log("No value match");
            }
        }
        return () => {};
    }, [CategoryData]);

    return (
        <>
            {(!ProductListUid) ? (
                <LoadingPage />
            ) : (
                <ProductListPageContainer>
                    <Heading
                        mainHeading="Product Page"
                        subHeading="There has every product for all, Now choose yours"
                    ></Heading>
                    <ProductsContainer>
                        {ProductListUid.map((uid,index) => {
                            return (<ProductCard key={index} uid={uid}></ProductCard>);
                        })}
                    </ProductsContainer>
                    <TrustPointContainer></TrustPointContainer>
                </ProductListPageContainer>
            )}
        </>
    );
}
