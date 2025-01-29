import { Status } from "../../constant";

export interface InsuranceDiscountState {
  status: Status,
  insuranceDiscount: Discounts[],
  selectedInsuranceDiscount: string,
  selectedInsuranceDriverDiscount: string
}

export interface Discounts {
  id: number,
  title: string
}