import { createAsyncThunk } from "@reduxjs/toolkit";

import request from "../../services/request";

export const fetchInsuranceProviders = createAsyncThunk("providers", async () => {
  const data = await request('https://www.azki.com/api/product/third/companies')
  return data.map((item: { id: number, title: string }) => ({
    id: item.id,
    title: item.title
  }))
})