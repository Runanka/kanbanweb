"use client";

import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";

import { DialogCard } from "./dialog-card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NewBoardCard } from "./newboard-card";

export const CreateButton = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div>
            <Button size="sm" variant="custom1" className="md:hidden">
              <FaPlus className="size-5" />
            </Button>
            <Button
              variant="custom1"
              className="hidden md:block text-base uppercase font-semibold"
            >
              Create
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          sideOffset={5}
          align={"start"}
          className="flex flex-col justify-center items-center w-72 border border-custom-gray-2 bg-custom-black"
        >
          <DialogCard />
          <NewBoardCard />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
