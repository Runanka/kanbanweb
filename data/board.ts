import prisma from "@/lib/db";

export const createBoard = async (
  boardName: string,
  boardColor: string,
  organizationId: string
) => {
  const newBoard = await prisma.board.create({
    data: {
      name: boardName,
      color: boardColor,
      organizationId: organizationId,
    },
  });

  return newBoard.id;
};

export const getBoardData = async (boardId: string) => {
  const boardData = await prisma.board.findUnique({
    where: {
      id: boardId,
    },
  });

  return boardData;
};

export const getBoardList = async (organizationId: string) => {
  const boardList = await prisma.organization.findUnique({
    where: {
      id: organizationId,
    },
    select: {
      boards: {
        select: {
          id: true,
          name: true,
          color: true,
        },
      },
    },
  });

  return boardList;
};

export const deleteBoard = async (boardId: string) => {
  const deletedBoard = await prisma.board.delete({
    where: {
      id: boardId,
    },
  });

  return deletedBoard;
};
