"use client"
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import { NewPasswordSchema } from "@/schemas";
import { useState, useTransition } from "react";


import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} 
from "@/components/ui/form"

import { CardWrapper } from "./card-wrapper"
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { newPassword } from "@/actions/new-password";
import { useSearchParams } from "next/navigation";

export const NewPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [isPending,startTransition] = useTransition();
  const [error,setError] = useState<string | undefined>("");
  const [success,setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver:zodResolver(NewPasswordSchema),
    defaultValues:{
      password:"",
    }
  });

  const onSubmit = (values:z.infer<typeof NewPasswordSchema>) => {
    setError("");
    setSuccess("");

    console.log(values);

    startTransition(()=>{
      newPassword(values, token)
      .then(data=>{
        setError(data?.error);
        // TODO: Add when we will have 2Factor
        setSuccess(data?.success);
      })
    })
  }
  return (
    <CardWrapper 
      headerLabel="Enter a new password?"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="password"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="******"
                        type="password"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
        
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button disabled={isPending} type="submit" className="w-full">Reset Password</Button>
          </form>
        </Form>
    </CardWrapper>
  )
}
