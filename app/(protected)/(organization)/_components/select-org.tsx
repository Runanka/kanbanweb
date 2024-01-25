"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useParams, useRouter } from "next/navigation";
import { OrgDropDown } from "../../_components/org-dropdown";

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
    <OrgDropDown orgList={organizationsList} onChangeHandler={onValChange} defaultValue={orgId}/>
    </div>
  );
};
