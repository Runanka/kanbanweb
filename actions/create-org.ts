"use server";

import * as z from "zod";

import { OrgNameSchema } from "@/schemas";
import { auth } from "@/auth";
import { createOrganization } from "@/data/organization";
import { revalidatePath } from "next/cache";

export const createOrg = async (values: z.infer<typeof OrgNameSchema>) => {
  const validatedFields = OrgNameSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { organizationName } = validatedFields.data;

  const session = await auth();

  const userId = session?.user?.id;

  const orgId = await createOrganization(organizationName, userId as string);
  revalidatePath("/(protected)/(organization)/", "layout");
  return { success: `${orgId}` };
};
