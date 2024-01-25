"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BoardNameSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useTransition } from "react";
import { PopoverContent } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { createNewBoard } from "@/actions/create-new-board";
import { useParams, useRouter } from "next/navigation";

export const CreateBoard = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const form = useForm<z.infer<typeof BoardNameSchema>>({
    resolver: zodResolver(BoardNameSchema),
    defaultValues: {
      boardName: "",
      boardColor: "",
    },
  });

  const params = useParams();
  const orgId = Array.isArray(params.organizationId)
    ? params.organizationId[0]
    : params.organizationId;

  const onSubmit = (values: z.infer<typeof BoardNameSchema>) => {
    startTransition(() => {
      console.log(values);
      createNewBoard(values, orgId).then((res) => {
        if (res.error) {
          console.log(res.error);
        } else {
          console.log(res.data);
          router.push(`/${orgId}/${res.data}`);
        }
      });
    });
  };

  const boardColorsList = [
    "#849899",
    "#EDD591",
    "#956363",
    "#41716F",
    "#958163",
    "#959563",
    "#956395",
    "#6D6395",
  ];

  return (
    <PopoverContent
      side={"bottom"}
      sideOffset={10}
      align={"start"}
      className="w-56 bg-custom-black border border-custom-gray-2 rounded-md p-4"
    >
      <div className="flex flex-col gap-2">
        <div className="text-custom-white text-center text-lg font-semibold">
          Create Board
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="boardName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-custom-gray">Board name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Board name"
                      disabled={isPending}
                      className="text-custom-black bg-custom-white border-custom-gray-2 border"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="boardColor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-custom-gray">
                    Board Color
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-wrap gap-2 w-full justify-center"
                    >
                      {boardColorsList.map((color) => (
                        <FormItem key={color}>
                          <FormControl>
                            <RadioGroupItem
                              value={color}
                              className="w-10 h-10 rounded-md"
                              style={{ backgroundColor: color }}
                            />
                          </FormControl>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              size="wide"
              variant="custom1"
              className="w-full text-sm md:text-base"
              disabled={isPending}
            >
              Create
            </Button>
          </form>
        </Form>
      </div>
    </PopoverContent>
  );
};
