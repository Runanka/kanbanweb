import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tourney } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LogIn } from "lucide-react";
import { LogInButton } from "./login-button";
import { Sign } from "crypto";
import { SignUpButton } from "./signup-button";

const tourney = Tourney({ weight: "900", subsets: ["latin"] });

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full flex items-center justify-between px-2 shadow-md z-1 bg-slate-200">
      <div className="flex items-center">
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
        <p className={cn("px-2 hidden md:block text-2xl ", tourney.className)}>
          KanbanWeb
        </p>
      </div>
      <div className="flex gap-x-4">
        <LogInButton>
          <Button size="md">Login</Button>
        </LogInButton>
        <SignUpButton>
          <Button size="md">Sign Up</Button>
        </SignUpButton>
      </div>
    </div>
  );
};
