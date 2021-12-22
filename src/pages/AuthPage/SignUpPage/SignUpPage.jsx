import React from 'react'
import { Link } from "react-router-dom";
import { SignUpPageContainer,MainContent,ImageContainer } from './SignUpPageStyle'
import { ReactComponent as GoogleIcon } from "../../../res/icons/google.svg";
import Button from "@mui/material/Button";
import InputField from "../../../components/InputField/InputField";
export default function SignUpPage() {
    return (
        <SignUpPageContainer>
            <ImageContainer></ImageContainer>
            <MainContent>
                <div className="FormContainer">
                    <form action="">
                        <div className="Title">SignUp</div>
                        <div className="SubTitle">
                            One Step Away To Your Product.
                        </div>
                        <Button
                            className="SignUpWithGoogle"
                            variant="contained"
                            color="secondary"
                            startIcon={<GoogleIcon></GoogleIcon>}
                        >
                            SignUp With Google
                        </Button>
                        <div className="Divider">
                            <span> Or SignUp With Your Email</span>
                            <div className="bar"></div>
                        </div>
                        <InputField
                            Type="text"
                            Label="Full Name"
                            Placeholder="enter your name"
                        ></InputField>
                        <InputField
                            Type="email"
                            Label="Email"
                            Placeholder="mail@website.com"
                        ></InputField>
                        <InputField
                            Type="password"
                            Label="Password"
                            Placeholder="min 8 character"
                        ></InputField>
                        <Button type="submit" variant="contained">
                            Create Account
                        </Button>
                        <div className="SignUpLinkContainer">
                            Existing User?
                            <Link to="/auth/login">Go to Login Page</Link>
                        </div>
                    </form>
                </div>
            </MainContent>
        </SignUpPageContainer>
    )
}
