"use server";


import { getBoardList } from "@/data/board";

export const getBrdList = async (organizationId: string) => {
  const boardList = await getBoardList(organizationId);

  return boardList;
};
