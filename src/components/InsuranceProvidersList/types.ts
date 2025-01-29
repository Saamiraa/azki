import { Status } from "../../constant";

export interface InsuranceProvidersState {
  status: Status,
  insuranceProvider: InsuranceProvider[],
  selectedInsuranceProvider: string
}

export interface InsuranceProvider {
  id: number,
  title: string
}