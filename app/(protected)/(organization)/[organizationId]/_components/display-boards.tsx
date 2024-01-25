"use client";

import { delBoard } from "@/actions/del-board";
import { useTransition } from "react";
import { MdDelete } from "react-icons/md";

export const DisplayBoards = ({
  boardList,
}: {
  boardList: { boards: { id: string; name: string; color: string }[] } | null;
}) => {
  const [isPending, startTransition] = useTransition();

  const onDelete = (boardId: string) => {
    console.log("delete");
    startTransition(() => {
      delBoard(boardId).then((res) => {
        if (res.error) {
          console.log(res.error);
        } else {
          console.log(res.success);
        }
      });
    });
  };
  return (
    <>
      {boardList?.boards &&
        boardList.boards.map((board) => (
          <div
            key={board.id}
            style={{ background: board.color }}
            className="text-lg md:text-xl w-36 sm:w-48 md:w-72 h-32 font-semibold text-custom-black uppercase rounded-md group"
          >
            <div className="flex items-end justify-between  w-full h-full group-hover:bg-black/60 p-4 gap-4">
              <div className="group-hover:text-custom-white overflow-hidden overflow-ellipsis whitespace-nowrap max-w-16 sm:max-w-28 md:max-w-52">
                {board.name}
              </div>
              <MdDelete
                onClick={() => onDelete(board.id)}
                disabled={isPending}
                className="opacity-0 group-hover:opacity-100 text-custom-white hover:text-custom-gray size-8"
              />
            </div>
          </div>
        ))}
    </>
  );
};
