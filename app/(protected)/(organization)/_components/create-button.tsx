"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";

import { createOrg } from "@/actions/create-org";
import { useState, useTransition } from "react";
import { cn } from "@/lib/utils";

import * as z from "zod";

import { OrgNameSchema } from "@/schemas";
import { useRouter } from "next/navigation";
import { OrgForm } from "../../_components/org-form";

export const CreateButton = () => {
  const router = useRouter();

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [errorString, setErrorString] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const createOrgForm = (values: z.infer<typeof OrgNameSchema>) => {
    setErrorString("");

    startTransition(() => {
      createOrg(values).then((data) => {
        setErrorString(data?.error);
        if (data?.success) {
          setOpenDialog(false);
          router.push(`/${data?.success}`);
        }
      });
    });
  };

  return (
    <div className="relative flex flex-col">
      <div className="z-10">
        <Button
          className="md:hidden"
          onClick={() => {
            setIsDropdownVisible(!isDropdownVisible);
          }}
        >
          <FaPlus />
        </Button>
        <Button
          className="hidden md:block"
          onClick={() => {
            setIsDropdownVisible(!isDropdownVisible);
          }}
        >
          <span className="font-semibold">Create</span>
        </Button>
      </div>
      <div
        className={cn(
          "absolute left-0 w-60 mt-12 cursor-pointer bg-black/70 backdrop-blur-md rounded-lg shadow-lg py-1 z-1  transition-all duration-200 ease-in-out origin-top",
          {
            "opacity-0 scale-y-0": !isDropdownVisible,
            "opacity-100 scale-y-100": isDropdownVisible,
          }
        )}
      >
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogTrigger>
            <div
              onClick={() => {
                setIsDropdownVisible(false);
              }}
            >
              <div className="p-2">
                <h1 className="text-xl text-black/80 font-semibold tracking-wider uppercase bg-white/10 p-2 rounded-lg hover:italic">
                  Create Organization
                </h1>
                <p className="p-2 rounded-lg text-green-50 text-sm">
                  Create an organization for project and team management.
                </p>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent
            className="max-w-80 sm:max-w-lg "
            {...(isPending ? { forceMount: true } : {})}
          >
            <DialogHeader className="space-y-4 pt-4">
              <DialogTitle className="tracking-widest uppercase text-xl text-center">
                Create Organization
              </DialogTitle>
              <DialogDescription className="text-start">
                Create an organization to centralize projects, enhance
                collaboration, and manage roles efficiently.
              </DialogDescription>
              <OrgForm
                formHandler={createOrgForm}
                errorString={errorString}
                isPending={isPending}
              />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
