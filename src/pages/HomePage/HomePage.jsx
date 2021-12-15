import React from "react";
import HeroImg from "../../res/img/home_hero.png";
import EarphoneImg from "../../res/img/EarphoneImg.png";
import TWSImg from "../../res/img/TWSImg.png";
import HeadphoneImg from "../../res/img/HeadphoneImg.png";
import Button from "@mui/material/Button";
import TrustPointContainer from '../../components/TrustPointContainer/TrustPointContainer'
import {
    HomePageContainer,
    HeadingContainer,
    HeadingBanner,
    HeadingBannerContainer,
    FirstHeading,
    SecondHeading,
    MainHeading,
    FirstPart,
    SecondPart,
    BottomDescription,
    BottomHeading,
    BottomContainer,
    MainImg,
    EarphoneCard,
    TWSCard,
    HeadphoneCard,
} from "./HomePageStyle";
import SponsorSwiper from "../../components/SponsorSwiper/SponsorSwiper";
import ProductBanner from "../../components/ProductBanner/ProductBanner";

export default function HomePage() {
    return (
        <>
            <HomePageContainer>
                <HeadingContainer>
                    <HeadingBanner>
                        <HeadingBannerContainer>
                            <FirstHeading>Beats Studio</FirstHeading>
                            <SecondHeading>Wireless</SecondHeading>
                            <MainHeading>
                                <FirstPart>HEAD</FirstPart>
                                <SecondPart>PHONE</SecondPart>
                            </MainHeading>
                            <Button variant="contained">Buy Now</Button>
                            <BottomContainer>
                                <BottomHeading>Description</BottomHeading>
                                <BottomDescription>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit ut aliquam, purus sit amet
                                    luctus venenatis, le
                                </BottomDescription>
                            </BottomContainer>
                            <MainImg src={HeroImg}></MainImg>
                        </HeadingBannerContainer>
                    </HeadingBanner>
                    <EarphoneCard>
                        <div className="Subheading">Enjoy</div>
                        <div className="Heading">EARPHONE</div>
                        <Button variant="contained">Browse</Button>
                        <img src={EarphoneImg} alt="" />
                    </EarphoneCard>
                    <TWSCard>
                        <div className="Subheading">New</div>
                        <div className="Heading">TWS</div>
                        <img src={TWSImg} alt="" />
                        <Button variant="contained" color="secondary">Browse</Button>
                    </TWSCard>
                    <HeadphoneCard>
                        <div className="Subheading">Limited Edition</div>
                        <div className="Heading">HEADPHONE</div>
                        <div className="Description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, le
                        </div>
                        <Button variant="contained">Browse</Button>
                        <img src={HeadphoneImg} alt="" />
                    </HeadphoneCard>
                </HeadingContainer>

                <TrustPointContainer>
                </TrustPointContainer>
                <ProductBanner></ProductBanner>
                <SponsorSwiper></SponsorSwiper>
            </HomePageContainer>
        </>
    );
}
