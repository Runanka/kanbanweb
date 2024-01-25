"use client";

import { useState, useTransition } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { OrgForm } from "../../_components/org-form";
import { createOrg } from "@/actions/create-org";
import { OrgNameSchema } from "@/schemas";
import { OrgDropDown } from "../../_components/org-dropdown";

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
    <div className="flex flex-col py-2  gap-y-2">
      {orgList.length !== 0 && (
        <div className="flex flex-col">
          <div className="flex justify-start items-center gap-x-4 py-12">

            <OrgDropDown orgList={orgList} onChangeHandler={onValChange} />
            <button className="btn btn-primary" onClick={onButtonClick}>
              <FaArrowRight className="text-custom-black size-6" />
            </button>
          </div>
          <div className="flex items-center">
            <hr className="flex-grow border-custom-gray-2 " />
            <span className="text-custom-black/80">or</span>
            <hr className="flex-grow border-custom-gray-2" />
          </div>
        </div>
      )}
      <OrgForm
        formHandler={createOrgForm}
        errorString={errorString}
        isPending={isPending}
      />
    </div>
  );
};
