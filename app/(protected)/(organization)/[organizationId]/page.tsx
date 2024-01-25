import { Popover, PopoverTrigger } from "@/components/ui/popover";

import { CreateBoard } from "./_components/create-board";
import { getBoardList } from "@/data/board";
import { DisplayBoards } from "./_components/display-boards";
import { getOrgData } from "@/actions/get-org-data";

const OrganizationPage = async ({
  params,
}: {
  params: { organizationId: string };
}) => {
  const boardList = await getBoardList(params.organizationId);
  const orgData = await getOrgData();

  const onDelete = () => {
    console.log("delete");
  };

  return (
    <div className="flex flex-col items-start xl:items-center w-full h-full min-w-96">
      <div className="flex items-center justify-center w-full p-8 h-32 border-b border-custom-gray-2 ">
        {orgData?.map((org) => (
          <p key={org.id} className="text-custom-white text-2xl md:text-3xl">
            {org.name}
          </p>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 max-w-screen-xl min-w-screen-sm p-8">
        <Popover>
          <PopoverTrigger asChild>
            <div className="bg-custom-gray flex items-center justify-center w-36 sm:w-48 md:w-72 h-32 text-lg md:text-xl hover:bg-custom-gray-2 hover:text-custom-white rounded-md ">
              Create new board
            </div>
          </PopoverTrigger>
          <CreateBoard />
        </Popover>
        <DisplayBoards boardList={boardList} />
      </div>
    </div>
  );
};

export default OrganizationPage;
