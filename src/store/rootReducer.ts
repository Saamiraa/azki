import { combineReducers } from "@reduxjs/toolkit";
import { formSlice } from "../components/formController/slice";
import { vehiclesSlice } from "../components/vehiclesList/slice";
import { insuranceProvidersSlice } from "../components/InsuranceProvidersList/slice";
import { insuranceDiscountSlice } from "../components/InsuranceDiscountList/slice";

const rootReducer = combineReducers({
  form: formSlice.reducer,
  vehicles: vehiclesSlice.reducer,
  providers: insuranceProvidersSlice.reducer,
  discount: insuranceDiscountSlice.reducer
})

export default rootReducer