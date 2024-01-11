"use client";

import { AlertTriangle } from "lucide-react";

interface FormErrorProps {
  message: string;
}

export const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="flex w-full p-4 text-sm gap-x-2 bg-destructive/15 text-destructive">
      <AlertTriangle className="h-4 w-4" />
      <span>{message}</span>
    </div>
  );
};
