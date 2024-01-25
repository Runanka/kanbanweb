import { FormError } from "@/app/(auth)/_components/form-error";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { OrgNameSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface OrgFormProps {
  formHandler: (values: z.infer<typeof OrgNameSchema>) => void;
  errorString?: string | undefined;
  isPending?: boolean;
}

export const OrgForm = ({
  formHandler,
  errorString,
  isPending,
}: OrgFormProps) => {
  const orgForm = useForm<z.infer<typeof OrgNameSchema>>({
    resolver: zodResolver(OrgNameSchema),
    defaultValues: {
      organizationName: "",
    },
  });
  return (
    <div className="py-4">
      <Form {...orgForm}>
        <form onSubmit={orgForm.handleSubmit(formHandler)}>
          <FormField
            control={orgForm.control}
            name="organizationName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <p className="text-start text-custom-black/80 text-sm md:text-base">
                    Organization Name
                  </p>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="bg-custom-white border-custom-black text-custom-black text-base md:text-lg"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={errorString || ""} />
          <div className="w-full  pt-4 flex">
            <Button
              type="submit"
              size="wide"
              variant="custom3"
              className="max-w-32  text-base md:text-lg"
              disabled={isPending}
            >
              Create
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
