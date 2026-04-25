"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormSubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useLogin from "../hooks/use-login.hook";
import ButtonWithLoading from "@/components/ButtonWithLoadingV1";
import { useState } from "react";
import Link from "next/link";
import { useAuthStore } from "@/context/stores/use-auth.store";
import CustomFormField from "@/components/CustomFormField";

const FormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

type FormSchemaType = z.infer<typeof FormSchema>;

export function LoginForm({ redirect }: { redirect?: string }) {
  const [showReset, setShowReset] = useState(false);
  const { setUser } = useAuthStore();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    mutate(data, {
      onError: () => {
        setShowReset(true);
      },
      onSuccess: (data:any) => {
        setUser(data)
      }
    });
  };

  const { mutate, isPending } = useLogin();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
          autocomplete="current-password"
          label="Current Password"
          type="password"
        />
        <ButtonWithLoading
          disabled={isPending}
          isLoading={isPending}
          className="w-full cursor-pointer"
          type="submit"
        >
          Login
        </ButtonWithLoading>

        {showReset &&
          <Link href="/forgot-password" >
            <p className="text-muted-foreground text-center text-xs">
              Forgot your password ? {" "}
              <span className="text-blue-500">Click Here</span>
            </p>
          </Link>
        }
      </form>
    </Form>
  );
}
