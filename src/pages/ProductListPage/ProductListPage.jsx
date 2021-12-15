import React from "react";
import {
    ProductListPageContainer,
    ProductsContainer,
} from "./ProductListPageStyle";
import Heading from "../../components/Heading/Heading";
import ProductCard from "../../components/ProductCard/ProductCard";
export default function ProductListPage() {
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

        </ProductListPageContainer>
    );
}
