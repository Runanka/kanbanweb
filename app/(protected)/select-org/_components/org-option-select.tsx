"use client";

import { useState, useTransition } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import * as z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OrgForm } from "../../_components/org-form";
import { createOrg } from "@/actions/create-org";
import { OrgNameSchema } from "@/schemas";

interface OrgOptionSelectProps {
  orgList: { id: string; name: string }[];
}

export const OrgOptionSelect = ({ orgList }: OrgOptionSelectProps) => {
  const router = useRouter();
  const [selectedOrg, setSelectedOrg] = useState<string | null>(null);
  const [errorString, setErrorString] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const createOrgForm = (values: z.infer<typeof OrgNameSchema>) => {
    setErrorString("");

    startTransition(() => {
      createOrg(values).then((data) => {
        setErrorString(data?.error);
        if (data?.success) {
          router.push(`/${data?.success}`);
        }
      });
    });
  };

  const onValChange = (value: string) => {
    setSelectedOrg(value);
  };

  const onButtonClick = () => {
    if (selectedOrg) {
      router.push(`/${selectedOrg}`);
    }
  };

  return (
    <div className="flex flex-col py-2  gap-y-8">
      <div className="flex justify-start items-center gap-x-12">
        <Select onValueChange={onValChange}>
          <SelectTrigger className="w-[140px] 2xs:w-[180px] md:w-[220px]">
            <SelectValue placeholder="🏢 SELECT ORG" />
          </SelectTrigger>
          <SelectContent>
            {orgList.map((org: { id: string; name: string }) => (
              <SelectItem key={org.id} value={org.id}>
                <p className="font-medium uppercase">{org.name}</p>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <button className="btn btn-primary" onClick={onButtonClick}>
          <FaArrowRight className="" />
        </button>
      </div>
      <OrgForm
        formHandler={createOrgForm}
        errorString={errorString}
        isPending={isPending}
      />
    </div>
  );
};
