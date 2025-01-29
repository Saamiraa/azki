import { createAsyncThunk } from "@reduxjs/toolkit";

import request from "../../services/request";

export const fetchInsuranceDiscount = createAsyncThunk("discount", async () => {
  const data = await request('https://www.azki.com/api/product/third/third-discounts')
  return data
})