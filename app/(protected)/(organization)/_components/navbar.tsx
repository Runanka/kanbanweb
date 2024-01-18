import Image from "next/image";
import { Tourney } from "next/font/google";
import { BsPersonCircle } from "react-icons/bs";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SelectOrganization } from "./select-org";
import { CreateButton } from "./create-button";
import { getOrgList } from "@/actions/get-org-list";

const tourney = Tourney({ weight: "900", subsets: ["latin"] });

export const Navbar = async () => {
  const organizationsList = await getOrgList();
  return (
    <div className="fixed top-0 w-full h-12 flex items-center justify-between px-2 shadow-md z-10 bg-slate-200">
      <div className="flex items-center gap-x-2">
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
        <p className={cn("px-2 hidden md:block text-2xl ", tourney.className)}>
          KanbanWeb
        </p>
        <div>
          <CreateButton />
        </div>
      </div>
      <div className="flex gap-x-4">
        <SelectOrganization organizationsList={organizationsList} />
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback asChild>
              <BsPersonCircle className="text-slate-400" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};
