"use client";

import { useTransition, useState } from "react";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { SignUpSchema } from "@/schemas/index";
import { CardWrapper } from "./card-wrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";
import { signup } from "@/actions/signup";

export const SignUpForm = () => {
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const [errorString, setErrorString] = useState<string | undefined>("");
  const [successString, setSuccessString] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const onSubmit = (values: z.infer<typeof SignUpSchema>) => {
    setErrorString("");
    setSuccessString("");

    startTransition(() => {
      signup(values).then((data) => {
        setErrorString(data.error);
        setSuccessString(data.success);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Sign Up"
      backButtonLabel="Already have an account?"
      backButtonHref="/login"
      showSocials
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-custom-black/80">Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="John Doe"
                    disabled={isPending}
                    className="text-custom-black bg-custom-white border-custom-black border"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-custom-black/80">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="johndoe@example.com"
                    disabled={isPending}
                    className="text-custom-black bg-custom-white border-custom-black border"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-custom-black/80">Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="******"
                    disabled={isPending}
                    className="text-custom-black bg-custom-white border-custom-black border"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={errorString || ""} />
          <FormSuccess message={successString || ""} />
          <Button
            type="submit"
            size="wide"
            variant="custom3"
            className="w-full text-sm md:text-base"
            disabled={isPending}
          >
            Sign Up
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
