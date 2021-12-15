import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from './mui/MUI'
import Footer from './components/Footer/Footer'
import ProductListPage from "./pages/ProductListPage/ProductListPage.jsx";


function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <NavBar></NavBar>
                {/* <HomePage /> */}
                <ProductListPage></ProductListPage>
                {/* To Keep the footer at the bottom */}
                <div className="Spacer"></div>
                <Footer></Footer>
            </div>
        </ThemeProvider>
    );
}

export default App;
