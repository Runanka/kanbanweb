"use client";

import { CheckCircle } from "lucide-react";

interface FormSuccessProps {
  message: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="flex w-full p-4 text-sm gap-x-2 bg-emerald-500/15 text-emerald-500 ">
      <CheckCircle className="h-4 w-4" />
      <span>{message}</span>
    </div>
  );
};
