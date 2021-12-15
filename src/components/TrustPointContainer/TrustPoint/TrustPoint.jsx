import React from "react";
import { StyledTrustPoint, Title, Description,ContentContainer } from "./TrustPointStyle";

export default function TrustPoint({title, description,imgUrl}) {
    return (
        <StyledTrustPoint>
            <img src={imgUrl} alt="" />
            <ContentContainer>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </ContentContainer>
        </StyledTrustPoint>
    );
}
