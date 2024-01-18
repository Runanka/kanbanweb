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

  return (
    <div>
      <Card className="shadow-md w-full xs:w-auto">
        <CardHeader>
          <p className="flex items-start justify-start w-full text-2xl">
            Select Organization
          </p>
        </CardHeader>
        <CardDescription>
          <p className=" text-start w-full text-sm px-6">
            to continue to Kanban-Web
          </p>
        </CardDescription>
        <CardContent>
          <OrgOptionSelect orgList={orgList} />
        </CardContent>
      </Card>
    </div>
  );
};

export default SelectOrgPage;
