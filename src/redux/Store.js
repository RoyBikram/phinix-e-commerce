import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserReducer/UserReducer";
import CategoryReducer from "./CategoryReducer/CategoryReducer";
import CardReducer from './CardReducer/CardReducer'
import OrderReducer from './OrderReducer/OrderReducer'

export default configureStore({
    reducer: {
        User: UserReducer,
        Category: CategoryReducer,
        Card: CardReducer,
        Order:OrderReducer
    },
});
