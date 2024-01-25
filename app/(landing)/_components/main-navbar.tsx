import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Tourney } from "next/font/google";
import { cn } from "@/lib/utils";
import { LogInButton } from "./login-button";
import { SignUpButton } from "./signup-button";

const tourney = Tourney({ weight: "900", subsets: ["latin"] });

export const MainNavbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 flex items-center justify-between px-2 bg-custom-black border-b border-custom-gray-2 z-10">
      <div className="flex items-center">
        <Image src="/logo.svg" alt="logo" width={35} height={35} />
        <p className="px-4 hidden md:block text-3xl font-bold text-custom-white uppercase ">
          KanbanWeb
        </p>
      </div>
      <div className="flex gap-x-4">
        <LogInButton>
          <Button size="md" variant="custom1" className="text-base md:text-lg ">
            Log In
          </Button>
        </LogInButton>
        <SignUpButton>
          <Button size="md" variant="custom2" className="text-base md:text-lg ">
            Sign Up
          </Button>
        </SignUpButton>
      </div>
    </div>
  );
};
