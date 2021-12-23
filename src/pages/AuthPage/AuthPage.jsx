import React from 'react'
import { AuthPageContainer } from './AuthPageStyle'
import { Outlet } from "react-router-dom";
export default function AuthPage() {
    
    return (
        <AuthPageContainer>
            <Outlet/>
        </AuthPageContainer>
    )
}
