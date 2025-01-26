export const FORM_STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error"
}

export type FormStatus = typeof FORM_STATUSES[keyof typeof FORM_STATUSES]