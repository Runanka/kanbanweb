import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { OrgOptionSelect } from "./_components/org-option-select";
import { getOrgList } from "@/actions/get-org-list";

const SelectOrgPage = async () => {
  const orgList = await getOrgList();
  console.log(orgList.length);

  return (
    <div>
      <Card className="bg-custom-gray border-0">
        <CardHeader className="flex items-start justify-start pb-2 border-b-2 border-custom-gray-2">
          <div className="flex items-start justify-start w-full text-3xl md:text-4xl text-custom-black">
            Select Organization
          </div>
          <div className=" text-start w-full text-base md:text-lg text-custom-black/80">
            (or) create to continue to KanbanWeb
          </div>
        </CardHeader>
        <CardContent>
          <OrgOptionSelect orgList={orgList} />
        </CardContent>
      </Card>
    </div>
  );
};

export default SelectOrgPage;
