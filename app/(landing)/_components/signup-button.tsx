"use client";

import { useRouter } from "next/navigation";

interface SignUpButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const SignUpButton = ({
  children,
  mode = "redirect",
  asChild,
}: SignUpButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    router.push("/signup");
  };

  return <span onClick={onClick}>{children}</span>;
};
