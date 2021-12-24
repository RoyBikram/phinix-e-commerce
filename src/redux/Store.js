import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserReducer/UserReducer";
import CategoryReducer from "./CategoryReducer/CategoryReducer";

export default configureStore({
    reducer: {
        User: UserReducer,
        Category: CategoryReducer,
    },
});
