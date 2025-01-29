import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../../constant";
import { fetchInsuranceProviders } from "./thunk";
import { InsuranceProvidersState } from "./types";

const initialState: InsuranceProvidersState = {
  status: STATUSES.IDLE,
  insuranceProvider: [],
  selectedInsuranceProvider: ''
}

export const insuranceProvidersSlice = createSlice({
  name: "insuranceProvider",
  initialState,
  reducers: {
    selectInsuranceProvider(state, action) {
      const provider = state.insuranceProvider.find(
        (item) => item?.title === action.payload
      )
      state.selectedInsuranceProvider = provider ? provider.title : "";
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInsuranceProviders.pending, (state) => {
      state.status = STATUSES.LOADING
      state.insuranceProvider = []
    })
    builder.addCase(fetchInsuranceProviders.fulfilled, (state, action) => {
      state.status = STATUSES.SUCCESS;
      state.insuranceProvider = action.payload.map((item: { id: number, title: string }) => ({
        id: item.id,
        title: item.title
      }));
    });
    builder.addCase(fetchInsuranceProviders.rejected, (state) => {
      state.status = STATUSES.ERROR
      state.insuranceProvider = []
    })
  }
})

export const { selectInsuranceProvider } = insuranceProvidersSlice.actions

export default insuranceProvidersSlice.reducer
