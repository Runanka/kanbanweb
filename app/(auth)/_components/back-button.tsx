"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BackButtonProps {
  backButtonLabel: string;
  backButtonHref: string;
}

export const BackButton = ({
  backButtonLabel,
  backButtonHref,
}: BackButtonProps) => {
  return (
    <Button
      variant="link"
      className="flex justify-center items-center w-full text-custom-black/80 text-sm md:text-base"
      asChild
    >
      <Link href={backButtonHref}>{backButtonLabel}</Link>
    </Button>
  );
};
