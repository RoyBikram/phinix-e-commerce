import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserReducer/UserReducer";
import CategoryReducer from "./CategoryReducer/CategoryReducer";
import CardReducer from './CardReducer/CardReducer'

export default configureStore({
    reducer: {
        User: UserReducer,
        Category: CategoryReducer,
        Card:CardReducer
    },
});
