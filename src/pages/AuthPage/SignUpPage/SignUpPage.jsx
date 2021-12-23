import React, {useEffect} from 'react'
import { Link } from "react-router-dom";
import { SignUpPageContainer,MainContent,ImageContainer } from './SignUpPageStyle'
import { ReactComponent as GoogleIcon } from "../../../res/icons/google.svg";
import Button from "@mui/material/Button";
import InputField from "../../../components/InputField/InputField";
import { AuthWithGoogle } from '../../../firebase/Firebase'
import { useDispatch,useSelector } from "react-redux";
import { setUser } from "../../../redux/UserReducer/UserReducer";
import {useNavigate} from 'react-router-dom'


export default function SignUpPage() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.User.UserData)
    const navigate = useNavigate()


    useEffect(() => {
        if (user) {
            navigate("/")  
        }
    }, [user,navigate])


    const HandelSignUpWithGoogle = async () => {
        let AuthUser = await AuthWithGoogle()
        if (AuthUser) {
            dispatch(
                setUser({
                    name: AuthUser?.displayName,
                    email: AuthUser?.email,
                    photoUrl: AuthUser?.photoURL,
                    uid:AuthUser?.uid
                })
            );
        }
    }


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
                            onClick={HandelSignUpWithGoogle}
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
