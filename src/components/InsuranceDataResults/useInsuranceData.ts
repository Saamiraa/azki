/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux'

export const useInsuranceData = () => {
  return {
    firstName: useSelector((state: any) => state.form.formData.name),
    lastName: useSelector((state: any) => state.form.formData.lastName),
    mobileNumber: useSelector((state: any) => state.form.formData.phoneNumber),
    userPassword: useSelector((state: any) => state.form.formData.password),
    selectedCar: useSelector((state: any) => state.vehicles.selectedVehicle),
    carUsageType: useSelector((state: any) => state.vehicles.selectedUsageTitle),
    selectedInsuranceProvider: useSelector((state: any) => state.providers.selectedInsuranceProvider),
    selectedInsuranceDiscount: useSelector((state: any) => state.discount.selectedInsuranceDiscount),
    selectedDriverDiscount: useSelector((state: any) => state.discount.selectedInsuranceDriverDiscount),
  }
}
