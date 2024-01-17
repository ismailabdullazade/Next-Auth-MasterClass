"use client"
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import { ResetSchema } from "@/schemas";
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
import { login } from "@/actions/login";

export const ResetForm = () => {


  const [isPending,startTransition] = useTransition();
  const [error,setError] = useState<string | undefined>("");
  const [success,setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver:zodResolver(ResetSchema),
    defaultValues:{
      email:"",
      password:"",
    }
  });

  const onSubmit = (values:z.infer<typeof ResetSchema>) => {
    setError("");
    setSuccess("");

    console.log(values);

    // startTransition(()=>{
    //   login(values)
    //   .then(data=>{
    //     setError(data?.error);
    //     // TODO: Add when we will have 2Factor
    //     setSuccess(data?.success);
    //   })
    // })
  }
  return (
    <CardWrapper 
      headerLabel="Forgot your password?"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="ismail@gmail.com"
                        type="email"
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
            <Button disabled={isPending} type="submit" className="w-full">Send reset email</Button>
          </form>
        </Form>
    </CardWrapper>
  )
}
