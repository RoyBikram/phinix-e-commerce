import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./mui/MUI";
import Footer from "./components/Footer/Footer";
import AuthPage from "./pages/AuthPage/AuthPage";
import LoginPage from "./pages/AuthPage/LoginPage/LoginPage";
import SignUpPage from "./pages/AuthPage/SignUpPage/SignUpPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import CardPage from './pages/CardPage/CardPage';
import AddressPage from './pages/AddressPage/AddressPage'
import ConfirmOrderPage from './pages/ConfirmOrderPage/ConfirmOrderPage'

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <NavBar></NavBar>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/auth" element={<AuthPage />}>
                        <Route path="login" element={<LoginPage />} />
                        <Route path="signup" element={<SignUpPage />} />
                    </Route>
                    <Route path="/category" element={<CategoryPage />}>
                        <Route
                            path=":productlistid"
                            element={<ProductListPage />}
                        ></Route>
                    </Route>
                    <Route path=":productid" element={<ProductDetailPage />} />
                    <Route path="/card" element={<CardPage/>}></Route>
                    <Route path="/shipping_address" element={<AddressPage/>}/>
                    <Route path="/confirm_order" element={<ConfirmOrderPage/>}/>
                </Routes>
                <div className="Spacer"></div>
                <Footer></Footer>
            </div>
        </ThemeProvider>
    );
}

export default App;
