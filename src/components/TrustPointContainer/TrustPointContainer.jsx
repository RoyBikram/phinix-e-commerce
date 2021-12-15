import React from "react";
import { StyledTrustPointContainer } from "./TrustPointContainerStyle";
import TrustPoint from "./TrustPoint/TrustPoint";
import CarIcon from "../../res/icons/car.svg";
import CheckIcon from "../../res/icons/check.svg";
import HeadphoneIcon from "../../res/icons/headphone.svg";
import WalletIcon from "../../res/icons/wallet.svg";
import Heading from "../../components/Heading/Heading"

export default function TrustPointContainer() {
    return (
        <div>
            <Heading
                mainHeading={"Our Loved Services"}
                subHeading={"Here Some Of The Solid Reason To Love Our Product"}
            ></Heading>
            <StyledTrustPointContainer>
                <TrustPoint
                    imgUrl={CarIcon}
                    title={"Free Shipping"}
                    description={"Free Shipping On All Order"}
                ></TrustPoint>
                <TrustPoint
                imgUrl={CheckIcon}
                title={"Money Guarantee"}
                description={"30 Day Money Back"}></TrustPoint>
                <TrustPoint
                    imgUrl={HeadphoneIcon}
                    title={"Online Support"}
                    description={"Technical Support 24/7"}
                ></TrustPoint>
                <TrustPoint
                imgUrl={WalletIcon}
                title={"Secure Payment"}
                description={"All Payment Method Accepted"}></TrustPoint>
            </StyledTrustPointContainer>
        </div>
    );
}
