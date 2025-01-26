import { combineReducers } from "@reduxjs/toolkit";
import { formSlice } from "../components/formController/slice";

const rootReducer = combineReducers({
  form: formSlice.reducer
})

export default rootReducer