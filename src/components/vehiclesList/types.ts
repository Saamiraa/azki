import { Status } from "../../constant";
export interface VehicleUsage {
  id?: number,
  title: string;
}
export interface Vehicle {
  id?: number,
  title: string;
  usages?: VehicleUsage[];
}
export interface VehicleState {
  status: Status;
  vehicles: Vehicle[];
  selectedVehicle: string;
  selectedVehicleUsages: VehicleUsage[];
  selectedUsageTitle: string;
}