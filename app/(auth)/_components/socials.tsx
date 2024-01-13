"use client";

import { signIn } from "next-auth/react";
import { FaDiscord } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/lib/routes";

export const Socials = () => {
  const onClick = (provider: "google" | "github" | "discord") => {
    signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
  };

  return (
    <div className="flex items-center w-full space-x-4 ">
      <Button size="wide" onClick={() => onClick("google")}>
        <FcGoogle className="size-8" />
      </Button>
      <Button size="wide" onClick={() => onClick("github")}>
        <BsGithub className="size-8" />
      </Button>
      <Button size="wide" onClick={() => onClick("discord")}>
        <FaDiscord className="size-8" />
      </Button>
    </div>
  );
};
