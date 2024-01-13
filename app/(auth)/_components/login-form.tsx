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

import { LoginSchema } from "@/schemas/index";
import { CardWrapper } from "./card-wrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";
import { login } from "@/actions/login";
import { useSearchParams } from "next/navigation";

export const LoginForm = () => {
  const searhParams = useSearchParams();
  const urlError =
    searhParams.get("error") === "OAuthAccountNotLinked"
      ? "You already have an account with this email."
      : undefined;

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [errorString, setErrorString] = useState<string | undefined>("");
  const [successString, setSuccessString] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setErrorString("");
    setSuccessString("");

    startTransition(() => {
      login(values).then((data) => {
        setErrorString(data?.error);
        setSuccessString(data?.success);
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Log In"
      backButtonLabel="Don't have an account?"
      backButtonHref="/signup"
      showSocials
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    placeholder="johndoe@example.com"
                    disabled={isPending}
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="******"
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={errorString || urlError || ""} />
          <FormSuccess message={successString || ""} />
          <Button
            type="submit"
            size="wide"
            className="w-full"
            disabled={isPending}
          >
            Log In
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
