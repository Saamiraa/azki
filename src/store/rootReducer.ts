import { combineReducers } from "@reduxjs/toolkit";
import { formSlice } from "../components/formController/slice";
import { vehiclesSlice } from "../components/vehiclesList/slice";

const rootReducer = combineReducers({
  form: formSlice.reducer,
  vehicles: vehiclesSlice.reducer
})

export default rootReducer