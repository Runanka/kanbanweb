"use client";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";

export const Socials = () => {
  return (
    <div className="flex items-center w-full gap-x-4 gap-y-4 flex-col 2xs:flex-row">
      <Button size="wide" asChild>
        <FcGoogle className="size-full p-2" />
      </Button>
      <Button size="wide" asChild>
        <FaGithub className="size-full p-2" />
      </Button>
    </div>
  );
};
