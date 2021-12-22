import React from "react";
import { Link } from "react-router-dom";
import {
    LoginPageContainer,
    ImageContainer,
    MainContent,
} from "./LoginPageStyle";
import { ReactComponent as GoogleIcon } from "../../../res/icons/google.svg";
import Button from "@mui/material/Button";
import InputField from "../../../components/InputField/InputField";

export default function LoginPage() {
    return (
        <LoginPageContainer>
            <MainContent>
                <div className="FormContainer">
                    <form action="">
                        <div className="Title">Login</div>
                        <div className="SubTitle">
                            One Step Away To Your Product.
                        </div>
                        <Button
                            className="LoginWithGoogle"
                            variant="contained"
                            color="secondary"
                            startIcon={<GoogleIcon></GoogleIcon>}
                        >
                            {" "}
                            Login With Google
                        </Button>
                        <div className="Divider">
                            <span> or Login With Your Email</span>
                            <div className="bar"></div>
                        </div>
                        <InputField
                            Type="email"
                            Label="Email"
                            Placeholder="mail@website.com"
                        ></InputField>
                        <InputField
                            Type="password"
                            Label="Password"
                            Placeholder="Min 8 character"
                        ></InputField>
                        <Button type="submit" variant="contained">
                            Login
                        </Button>
                        <div className="SignUpLinkContainer">
                            Not registered yet?
                            <Link to="/auth/signup">Create an account</Link>
                        </div>
                    </form>
                </div>
            </MainContent>
            <ImageContainer></ImageContainer>
        </LoginPageContainer>
    );
}
