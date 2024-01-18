"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useParams, useRouter } from "next/navigation";

interface SelectOrganizationProps {
  organizationsList: { name: string; id: string }[];
}

export const SelectOrganization = ({
  organizationsList,
}: SelectOrganizationProps) => {
  const router = useRouter();
  const params = useParams();
  const orgId = Array.isArray(params.organizationId)
    ? params.organizationId[0]
    : params.organizationId;

  const onValChange = (value: string) => {
    router.push(`/${value}`);
  };

  return (
    <div>
      <Select onValueChange={onValChange} value={orgId}>
        <SelectTrigger className="w-[100px] 2xs:w-[150px] md:w-[180px]">
          <SelectValue placeholder="🏢 ORG" />
        </SelectTrigger>
        <SelectContent>
          {organizationsList.map((org) => (
            <SelectItem key={org.id} value={org.id}>
              <span className="font-medium uppercase">{org.name}</span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
