"use server";

import { deleteBoard } from "@/data/board";
import { revalidatePath } from "next/cache";

export const delBoard = async (boardId: string) => {
  try {
    await deleteBoard(boardId);
    revalidatePath("/(protected)/(organization)", "page");
    return { success: "Board deleted" };
  } catch (error) {
    return { error: "Something went wrong" };
  }
};
