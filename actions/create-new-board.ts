"use server";

import * as z from "zod";

import { BoardNameSchema } from "@/schemas";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { createBoard } from "@/data/board";

export const createNewBoard = async (
  values: z.infer<typeof BoardNameSchema>,
  orgId: string
) => {
  const validatedFields = BoardNameSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { boardName, boardColor } = validatedFields.data;

  const session = await auth();

  const userId = session?.user?.id;

  revalidatePath("/(protected)/(organization)/", "layout");

  try {
    const boardId = await createBoard(boardName, boardColor, orgId);
    revalidatePath("/(protected)/(organization)", "page");
    return { data: boardId, error: null };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};
