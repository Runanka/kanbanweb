"use client";

import { signIn } from "next-auth/react";
import { FaDiscord, FaGoogle } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/lib/routes";

export const Socials = () => {
  const onClick = (provider: "google" | "github" | "discord") => {
    signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
  };

  return (
    <div className="flex items-center w-full space-x-4 ">
      <Button size="wide" variant="custom3" onClick={() => onClick("google")}>
        <FaGoogle className="size-7 text-custom-gray" />
      </Button>
      <Button size="wide" variant="custom3" onClick={() => onClick("github")}>
        <TbBrandGithubFilled className="size-7 text-custom-gray" />
      </Button>
      <Button size="wide" variant="custom3" onClick={() => onClick("discord")}>
        <FaDiscord className="size-8 text-custom-gray" />
      </Button>
    </div>
  );
};
