export const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error"
}

export type Status = typeof STATUSES[keyof typeof STATUSES]