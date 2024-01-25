"use server";

import { auth } from "@/auth";
import { getOrganizationData } from "@/data/organization";
import { redirect } from "next/navigation";

export const getOrgData = async () => {
  const session = await auth();

  const user = session?.user;

  if (!user) {
    redirect("/login");
  }

  const orgData = await getOrganizationData(user.id);

  return orgData;
};
