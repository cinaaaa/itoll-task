import React from "react";

export interface TextProps {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "6xl";
  children: React.ReactNode;
}
