export interface InsuranceButtonProps {
  type?: "button" | "submit" | "reset";
  text: string;
  disabled?: boolean;
  onClick?: () => void;
  icon?: string;
  alt?: string;
}