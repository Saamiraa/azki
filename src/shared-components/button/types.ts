import React from "react";

export interface ButtonProps {
  type: "button" | "submit" | "reset";
  text: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}