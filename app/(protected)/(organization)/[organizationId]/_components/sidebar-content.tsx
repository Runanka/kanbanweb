"use client";

import { usePathname } from "next/navigation";

export const SidebarContent = () => {
  const orgId = usePathname().split("/")[1];

  return <div>{orgId}</div>;
};
