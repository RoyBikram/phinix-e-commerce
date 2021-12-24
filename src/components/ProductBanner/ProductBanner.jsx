import React from 'react'
import BannerTWS from '../../res/img/BannerTWS.png'
import Button from "@mui/material/Button";
import { ProductBannerContainer, BannerContent } from './ProductBannerStyle'
import {useNavigate} from 'react-router-dom'


export default function ProductBanner() {

    const navigate = useNavigate()

    const HandelButtonClick = () => {
        navigate("/leParWNtizHZos9kJpE3")
    }

    return (
        <ProductBannerContainer>
            <BannerContent>
                <div className="RightSide">
                    <div className="DiscountAmount">20% OFF</div>
                    <div className="OfferName">HAPPY <br /> HOURS</div>
                    <div className="Time">15 Nov To 7 Dec</div>
                </div>
                <div className="LeftSide">
                    <div className="Subheading">Best Offer Of The Year</div>
                    <div className="Heading">Summer Sale</div>
                    <div className="Description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore .</div>
                    <Button onClick={HandelButtonClick} variant="contained" color="secondary" sx={{
                        boxShadow: 'none',
                        ":hover": {
                            boxShadow:"none"
                        }
                        
                    }} >Grab Now</Button>
                </div>
            <img className="BannerTWS" src={BannerTWS} alt="" />
            </BannerContent>
        </ProductBannerContainer>
            
        
    )
}
