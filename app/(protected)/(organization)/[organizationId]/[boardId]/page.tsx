import { getBrdData } from "@/actions/get-brd-data";

const Page = async ({
  params,
}: {
  params: { organizationId: string; boardId: string };
}) => {
  const boardData = await getBrdData(params.boardId);

  return (
    <div className="h-full w-full" style={{ background: boardData?.color }}>
      <h1>Page</h1>
      <p className="text-custom-white">{params.boardId}</p>
      <p className="text-custom-white">{params.organizationId}</p>
    </div>
  );
};

export default Page;
