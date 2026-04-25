"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { RegisterForm } from "../types";
import useRegister from "../hooks/use-register.hook";
import ButtonWithLoading from "@/components/ButtonWithLoadingV1";
import CustomFormField from "@/components/CustomFormField";

const FormSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters."),
    email: z.string().email({ message: "Please enter a valid email address." }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." })
      .regex(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)/,
        "Password must include uppercase, lowercase, number, and special character."
      ),
    confirmPassword: z
      .string()
      .min(8, { message: "Confirm Password must be at least 8 characters." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export function RegisterForm() {
  const form = useForm<RegisterForm>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { mutate, isPending } = useRegister();

  const onSubmit = async (data: RegisterForm) => mutate(data);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Input id="name" type="name" placeholder="Joe Hattab" autoComplete="name" {...field} />
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
              <FormLabel>Email Address <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Input id="email" type="email" placeholder="you@example.com" autoComplete="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <CustomFormField
          form={form}
          name="password"
          autocomplete="new-password"
          label="New Password"
          type="password"
        />
        <CustomFormField
          form={form}
          name="confirmPassword"
          autocomplete="new-password"
          label="Confirm Password"
          type="password"
        />
        <ButtonWithLoading
          className="w-full cursor-pointer" type="submit"
          isLoading={isPending}
          disabled={isPending}
        >
          Register
        </ButtonWithLoading>
      </form>
    </Form>
  );
}
