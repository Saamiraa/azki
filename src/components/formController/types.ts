import { FormStatus } from "./constants"

export interface FormData {
  name: string,
  lastName: string,
  phoneNumber: string,
  password: string
}

export interface FormError {
  name: string,
  lastName: string,
  phoneNumber: string,
  password: string
}

export interface FormState {
  status: FormStatus,
  formData: FormData,
  error: FormError
}