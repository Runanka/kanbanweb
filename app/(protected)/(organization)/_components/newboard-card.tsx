import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { CreateBoard } from "../[organizationId]/_components/create-board";

export const NewBoardCard = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="flex flex-col justify-center h-24 py-4 px-8  text-start text-custom-white hover:bg-custom-gray/30 rounded-md">
          <div className="text-lg font-semibold ">Create Board</div>
          <div className="text-base ">To create a new fresh board</div>
        </div>
      </PopoverTrigger>
      <CreateBoard />
    </Popover>
  );
};
