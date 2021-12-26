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
import CardPage from "./pages/CardPage/CardPage";
import AddressPage from "./pages/AddressPage/AddressPage";
import ConfirmOrderPage from "./pages/ConfirmOrderPage/ConfirmOrderPage";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth, FetchCategoryData, db } from "./firebase/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/UserReducer/UserReducer";
import { setCategoryData} from "./redux/CategoryReducer/CategoryReducer";

import { collection, onSnapshot } from "firebase/firestore";
import {
    setCardData,
    setCardProductQuantity,
    setCardValue 
} from "./redux/CardReducer/CardReducer";

function App() {
    const dispatch = useDispatch();
    const UserUid = useSelector((state) => {
        return state.User?.UserData?.uid;
    });

    useEffect(() => {
        const unSubscribeFromUserData = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(
                    setUser({
                        name: user.displayName,
                        email: user.email,
                        photoUrl: user.photoURL,
                        uid: user.uid,
                    })
                );
            } else {
            }
        });
        const AsyncFunc = async () => {
            const FetchData = await FetchCategoryData();
            dispatch(setCategoryData(FetchData));
        };
        AsyncFunc();
        return () => {
            unSubscribeFromUserData();
        };
    }, []);

    useEffect(() => {
        let unsubscribe = () => {};
        if (UserUid) {
            const q = collection(db, `Users/${UserUid}/CardProducts`);
            unsubscribe = onSnapshot(q, (querySnapshot) => {
                const CardProducts = [];
                querySnapshot.forEach((doc) => {
                    const obj = {};
                    obj[doc.id] = doc.data();
                    CardProducts.push(obj);
                });
                dispatch(setCardData(CardProducts));
                dispatch(
                    setCardProductQuantity(
                        CardProducts.reduce((acc, product) => {
                            return acc + Object.values(product)[0].quantity;
                        }, 0)
                    )
                );
                dispatch(
                    setCardValue(
                        CardProducts.reduce((acc, product) => {
                            const value = Object.values(product)[0].quantity*Object.values(product)[0].price.currentPrice
                            return acc + value;
                        }, 0)
                    )
                );
            });
        }
        return () => {
            unsubscribe();
        };
    }, [UserUid]);

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
                    <Route path="/card" element={<CardPage />}></Route>
                    <Route path="/shipping_address" element={<AddressPage />} />
                    <Route
                        path="/confirm_order"
                        element={<ConfirmOrderPage />}
                    />
                </Routes>
                <div className="Spacer"></div>
                <Footer></Footer>
            </div>
        </ThemeProvider>
    );
}

export default App;
