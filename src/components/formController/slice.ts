import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { FormData, FormError, FormState } from "./types"
import { FORM_STATUSES, FormStatus } from "./constants"

const initialState: FormState = {
  status: FORM_STATUSES.IDLE,
  formData: {
    name: '',
    lastName: '',
    phoneNumber: '',
    password: ''
  },
  error: {
    name: '',
    lastName: '',
    phoneNumber: '',
    password: ''
  }
}

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData(state, action: PayloadAction<FormData>) {
      state.formData = action.payload
    },
    setStatus(state, action: PayloadAction<FormStatus>) {
      state.status = action.payload
    },
    setError(state, action: PayloadAction<FormError>) {
      state.error = action.payload
    }
  }
})

export const { setFormData, setStatus, setError } = formSlice.actions

export default formSlice.reducer