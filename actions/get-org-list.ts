"use server";

import { auth } from "@/auth";
import { getOrganizationList } from "@/data/organization";
import { redirect } from "next/navigation";

export const getOrgList = async () => {
  const session = await auth();

  const user = session?.user;

  if (!user) {
    redirect("/login");
  }

  const organizations = await getOrganizationList(user.id);

  if (!organizations) {
    throw new Error("No organizations found");
  }

  const orgList = organizations.organization.map((org) => ({
    id: org.organization.id,
    name: org.organization.name,
  }));

  return orgList;
};
