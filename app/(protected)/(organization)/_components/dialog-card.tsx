import { createOrg } from "@/actions/create-org";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { OrgNameSchema } from "@/schemas";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import * as z from "zod";
import { OrgForm } from "../../_components/org-form";

export const DialogCard = () => {
  const router = useRouter();

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
    <div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogTrigger>
          <div className="flex flex-col justify-center h-24 py-4 px-8 text-start text-custom-white hover:bg-custom-gray/30 rounded-md">
            <div className="text-lg font-semibold ">Create Organization</div>
            <div className="text-base ">To create a new organization</div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-80 md:max-w-lg bg-custom-gray border-custom-black">
          <DialogHeader className="space-y-4 pt-4">
            <DialogTitle className="tracking-widest uppercase text-2xl md:text-3xl text-center">
              Create Organization
            </DialogTitle>
            <DialogDescription className="text-start text-sm md:text-base text-custom-black/80">
              <div>
                Create an organization to centralize projects, enhance
                collaboration, and manage roles efficiently.
              </div>
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
  );
};
