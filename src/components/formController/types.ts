import { Status } from "../../constant"

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
  status: Status,
  formData: FormData,
  error: FormError
}