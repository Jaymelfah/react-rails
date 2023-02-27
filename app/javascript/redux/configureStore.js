import { configureStore } from "@reduxjs/toolkit";
import greetingReducer from "./greetings/greetings";

const store = configureStore({
    reducer: {
        greetings: greetingReducer,
    },
});

export default store;