import React from "react";
import {
    ProductListPageContainer,
    ProductsContainer,
} from "./ProductListPageStyle";
// import {useParams} from 'react-router-dom'
import Heading from "../../components/Heading/Heading";
import ProductCard from "../../components/ProductCard/ProductCard";
import TrustPointContainer from '../../components/TrustPointContainer/TrustPointContainer'

export default function ProductListPage() {
    // const { productlistid } = useParams()
    // console.log(productid)
    return (
        <ProductListPageContainer>
            <Heading
                mainHeading="Product Page"
                subHeading="There has every product for all, Now choose yours"
            ></Heading>
            <ProductsContainer>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </ProductsContainer>
            <TrustPointContainer></TrustPointContainer>
        </ProductListPageContainer>
    );
}
