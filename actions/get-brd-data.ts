"use server";

import { auth } from "@/auth";
import { getBoardData } from "@/data/board";

export const getBrdData = async (boardId: string) => {
  const boardData = await getBoardData(boardId);

  return boardData;
};
