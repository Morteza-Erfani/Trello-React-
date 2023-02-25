import { configureStore } from "@reduxjs/toolkit";
import tasksDetailsReducer from "./tasksDetails/tasksDetailsSlice";

export const store = configureStore({
  reducer: {
    tasksDetails: tasksDetailsReducer,
  },
});
