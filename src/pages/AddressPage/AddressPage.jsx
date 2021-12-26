import React from "react";
import { AddressPageContainer, GridContainer } from "./AddressPageStyle";
import Heading from "../../components/Heading/Heading";
import InputField from "../../components/InputField/InputField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { AddAddressToFirebase } from "../../firebase/Firebase";
import { useSelector } from "react-redux";

export default function AddressPage() {
    const UserUid = useSelector((state) => {
        return state.User.UserData?.uid;
    });
    const UserAddress = useSelector((state) => {
        return state.User.UserAddress?.Address;
    });
    const navigate = useNavigate();

    const HandelButtonClick = async (e) => {
        e.preventDefault();
        const Data = {
            name: e.target.name.value,
            mobile_number: e.target.mobile_number.value,
            country: e.target.country.value,
            state: e.target.state.value,
            district: e.target.district.value,
            city_town: e.target.city_town.value,
            pin: e.target.pin_code.value,
            landmark: e.target.landmark.value,
        };
        await AddAddressToFirebase(Data, UserUid)
        navigate("/order_summary")
    };
    return (
        <AddressPageContainer onSubmit={HandelButtonClick}>
            <Heading mainHeading="Your Shipping Address" />
            <GridContainer>
                <InputField
                    Type="text"
                    Label="Name"
                    Placeholder="Enter your name"
                />
                <InputField
                    Type="number"
                    Label="Mobile Number"
                    Placeholder="Enter 10-digit number"
                />
                <InputField
                    Type="text"
                    Label="Country"
                    Placeholder="Enter your country name"
                />
                <InputField
                    Type="text"
                    Label="State"
                    Placeholder="Enter your State Name"
                />
                <InputField
                    Type="text"
                    Label="District"
                    Placeholder="Enter your District Name"
                />
                <InputField
                    Type="text"
                    Label="City/Town"
                    Placeholder="Enter your City/Town Name"
                />
                <InputField
                    Type="number"
                    Label="Pin Code"
                    Placeholder="Enter your Pin Code"
                />
                <InputField
                    Type="text"
                    Label="Landmark"
                    Placeholder="Enter nearest place"
                />
            </GridContainer>
            <Button
                // onClick={HandelButtonClick}
                variant="contained"
                type="submit"
                sx={{
                    width: "300px",
                    height: "60px",
                    borderRadius: "12px",
                    fontSize: "15px",
                    boxShadow: "none",
                    marginTop: "50px",
                    ":hover": {
                        boxShadow: "none",
                    },
                }}
            >
                Save and Continue
            </Button>
        </AddressPageContainer>
    );
}
