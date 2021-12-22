import React from 'react'
import { AuthPageContainer } from './AuthPageStyle'
import { Outlet } from "react-router-dom";
export default function AuthPage() {
    // const pro = useParams()
    // console.log(pro.current_state)
    return (
        <AuthPageContainer>
            <Outlet/>
            {/* <LoginPage></LoginPage> */}
            {/* <SignUpPage></SignUpPage> */}
        </AuthPageContainer>
    )
}
