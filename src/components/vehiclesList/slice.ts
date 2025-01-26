import { createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "../../constant";

const initialState = {
  status: STATUSES.IDLE,
  vehicleData: [],
  error: null
}

export const vehicleSlice = createSlice({
  name: 'vehicle',
  initialState,
  reducers:{

  },
  extraReducers: {
    
  }
})