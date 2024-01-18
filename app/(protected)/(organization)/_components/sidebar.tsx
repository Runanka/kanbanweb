"use client";

import { useLocalStorage } from "usehooks-ts";
import { IoIosArrowForward } from "react-icons/io";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SidebarContent } from "../[organizationId]/_components/sidebar-content";


export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useLocalStorage("isSidebar", false);
  const handleSidebarToggle = () => {
    setIsSidebarOpen((preValue: Boolean) => !preValue);
  };

  return (
    <div
      className={cn(
        "h-full bg-black/80 pt-4 mr-8 backdrop-blur-xl shadow-md transition-all duration-500 ease-in-out",
        {
          "w-4 min-w-4": !isSidebarOpen,
          "w-72 min-w-72": isSidebarOpen,
        }
      )}
    >
      <Button
        onClick={handleSidebarToggle}
        size="round"
        className={cn(
          "bg-black/70 backdrop-blur-lg transition-all duration-500 ease-in-out",
          {
            "translate-x-0": !isSidebarOpen,
            "translate-x-48 rotate-180": isSidebarOpen,
          }
        )}
      >
        <IoIosArrowForward className="size-6 text-lime-200" />
      </Button>
      <div
        className={cn("transition-all duration-500 ease-in-out", {
          "-translate-x-64": !isSidebarOpen,
          "translate-x-0": isSidebarOpen,
        })}
      >
        <SidebarContent />
      </div>
    </div>
  );
};
