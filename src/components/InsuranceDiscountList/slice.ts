import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../../constant";
import { fetchInsuranceDiscount } from "./thunk";
import { InsuranceDiscountState } from "./types";

const initialState: InsuranceDiscountState = {
  status: STATUSES.IDLE,
  insuranceDiscount: [],
  selectedInsuranceDiscount: '',
  selectedInsuranceDriverDiscount: ''
}

export const insuranceDiscountSlice = createSlice({
  name: "insuranceDiscount",
  initialState,
  reducers: {
    selectInsuranceDiscount(state, action) {
      const provider = state.insuranceDiscount.find(
        (item) => item?.title === action.payload
      )
      state.selectedInsuranceDiscount = provider ? provider.title : "";
    },
    selectedInsuranceDriverDiscount(state, action) {
      const provider = state.insuranceDiscount.find(
        (item) => item?.title === action.payload
      )
      state.selectedInsuranceDriverDiscount = provider ? provider.title : "";
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInsuranceDiscount.pending, (state) => {
      state.status = STATUSES.LOADING
      state.insuranceDiscount = []
    })
    builder.addCase(fetchInsuranceDiscount.fulfilled, (state, action) => {
      state.status = STATUSES.SUCCESS;
      state.insuranceDiscount = action.payload
    });
    builder.addCase(fetchInsuranceDiscount.rejected, (state) => {
      state.status = STATUSES.ERROR
      state.insuranceDiscount = []
    })
  }
})

export const { selectInsuranceDiscount, selectedInsuranceDriverDiscount } = insuranceDiscountSlice.actions

export default insuranceDiscountSlice.reducer
