import { createSlice } from "@reduxjs/toolkit";
import { fetchVehiclesData } from "./thunk";
import { STATUSES } from "../../constant";
import { VehicleState, Vehicle } from "./types";

const initialState: VehicleState = {
  status: STATUSES.IDLE,
  vehicles: [], // List of all vehicles from server
  selectedVehicle: '', // Currently selected vehicle title
  selectedVehicleUsages: [], // List of usages for the selected vehicle
  selectedUsageTitle: '' // Title of the selected usage
};

export const vehiclesSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {
    selectVehicle(state, action: { payload: Vehicle | null }) {
      if (!action.payload) {
        state.selectedVehicle = '';
        state.selectedVehicleUsages = [];
      } else {
        const vehicle = state.vehicles.find(
          (v) => v.title === action?.payload?.title
        );
        if (vehicle) {
          state.selectedVehicle = vehicle.title;
          state.selectedVehicleUsages = vehicle.usages || [];
        }
      }
    },
    selectUsage(state, action: { payload: string | null }) {
      if (!action.payload) {
        state.selectedUsageTitle = ''; 
      } else {
        const usage = state.selectedVehicleUsages?.find(
          (u) => u.title === action.payload
        );
        if (usage) {
          state.selectedUsageTitle = usage.title;
        }
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVehiclesData.pending, (state) => {
      state.status = STATUSES.LOADING;
      state.vehicles = [];
    });
    builder.addCase(fetchVehiclesData.fulfilled, (state, action) => {
      state.status = STATUSES.SUCCESS;
      state.vehicles = action.payload;
    });
    builder.addCase(fetchVehiclesData.rejected, (state) => {
      state.status = STATUSES.ERROR;
      state.vehicles = [];
    });
  },
});

export const { selectVehicle, selectUsage } = vehiclesSlice.actions;
export default vehiclesSlice.reducer;