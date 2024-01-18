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
    <div>
      <Form {...orgForm}>
        <form onSubmit={orgForm.handleSubmit(formHandler)}>
          <FormField
            control={orgForm.control}
            name="organizationName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <p className="text-start">Organization Name</p>
                </FormLabel>
                <FormControl>
                  <Input {...field} type="text" placeholder="Google" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={errorString || ""} />
          <div className="w-full flex justify-center sm:justify-end  py-8">
            <Button
              type="submit"
              size="wide"
              className="sm:max-w-48 "
              disabled={isPending}
            >
              <p>Create</p>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
