import Image from "next/image";
import { Tourney } from "next/font/google";
import { BsPersonCircle } from "react-icons/bs";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SelectOrganization } from "./select-org";
import { CreateButton } from "./create-button";
import { getOrgList } from "@/actions/get-org-list";
import { OrgDropDown } from "../../_components/org-dropdown";
import { redirect } from "next/navigation";

const tourney = Tourney({ weight: "900", subsets: ["latin"] });

export const Navbar = async () => {
  const organizationsList = await getOrgList();

  return (
    <div className="fixed top-0 w-screen h-14 flex items-center justify-between bg-custom-black border-b border-custom-gray-2 z-10">
      <div className="flex items-center px-4 gap-x-4">
        <Image src="/logo.svg" alt="logo" width={35} height={35} />
        <p className="px-2 hidden md:block text-3xl uppercase font-bold text-white">
          KanbanWeb
        </p>
        <div>
          <CreateButton />
        </div>
      </div>
      <div className="flex items-center">
        <SelectOrganization organizationsList={organizationsList} />

        <div className="px-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback asChild>
              <BsPersonCircle className="text-custom-gray" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};
