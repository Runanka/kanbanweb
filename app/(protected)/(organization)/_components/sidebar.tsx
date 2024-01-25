"use client";

import { useLocalStorage } from "usehooks-ts";
import { IoIosArrowForward } from "react-icons/io";

import { cn } from "@/lib/utils";
import { SidebarContent } from "./sidebar-content";

export const Sidebar = ({
  organizationData,
}: {
  organizationData:
    | {
        id: string;
        name: string;
        users: { userId: string}[];
        boards: { id: string; name: string }[];
      }[]
    | undefined;
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useLocalStorage("isSidebar", false);
  const handleSidebarToggle = () => {
    setIsSidebarOpen((preValue: Boolean) => !preValue);
  };

  return (
    <div
      className={cn(
        "h-full bg-custom-black shadow-md transition-all duration-500 ease-in-out border-r border-custom-gray-2",
        {
          "w-4 min-w-4": !isSidebarOpen,
          "w-72 min-w-72": isSidebarOpen,
        }
      )}
    >
      <SidebarContent
        isSidebarOpen={isSidebarOpen}
        handleSidebarToggle={handleSidebarToggle}
        organizationData={organizationData}
      />
    </div>
  );
};
