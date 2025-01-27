import { createAsyncThunk } from "@reduxjs/toolkit";

import request from "../../services/request";

export const fetchVehiclesData = createAsyncThunk("vehicles", async () => {
  const data = await request('https://www.azki.com/api/product/vehicle/types')
  return data
}) 