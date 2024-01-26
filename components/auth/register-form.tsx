'use client'

import { createClient } from '@supabase/supabase-js';
import { usePathname } from "next/navigation";
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { RiShieldKeyholeFill } from "react-icons/ri";
import { authLogicStore } from "@/lib/zustand-store";

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from 'react';

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "../ui/label";

// FORM SCHEMA
const formSchema = z.object({
  email: z.string({
    required_error: "Email is required",
    invalid_type_error: "Name must be a string",
  }).email(),
  password: z.string({
    required_error: "Password is required",
    invalid_type_error: "Name must be a string",
  }).min(10, {message: 'Password is too short. The minimum length is 10 symbols.'}).max(36),
})
// import { supabaseClient } from '@/lib/supabase'
// COMPONENT
const RegistrationForm = () => {

    const [registrationSuccess, setRegistrationSuccess] = useState<boolean>(false)

    const supabaseClient = createClient('https://fjhmtnjrrhcuxexgvgte.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqaG10bmpycmhjdXhleGd2Z3RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA2MTk5MjQsImV4cCI6MjAwNjE5NTkyNH0.ggZY4MmOkvgWioNwveodMwHkRmigsS1RURECKghrtzo')

    const authLogicHandler = authLogicStore();
    const router = useRouter();
    const path = usePathname();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	})

    const loginBtnHandler = () => {
        if (path === '/register') {
            router.push('/login')
        }
        authLogicHandler.setStage('initial')
    }

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values)
        const { data, error } = await supabaseClient.auth.signUp({
            email: values.email,
            password: values.password
        })
        console.log(data)
        if (data) {
            setRegistrationSuccess(true)
        }
	}
  

  const formStyles = 'flex flex-col h-full w-full p-4 gap-4'

  const loginText = 'text-2xl'
  const formLabelStyles = 'text-zinc-700 ml-2 text-lg'

  return (
    <AnimatePresence mode="wait">
        {!registrationSuccess ? 
      <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7}}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className={cn(formStyles)} autoComplete="on">
              <span className='text-zinc-700 mb-4 gap-2 flex w-full items-center justify-center '>
                  <RiShieldKeyholeFill size={28} />
                  <Label className={cn(loginText)}>Signup</Label>
              </span>
              <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                  <FormItem>
                  <FormLabel className={cn(formLabelStyles)}>E-mail address</FormLabel>
                  <FormControl className={cn('bg-zinc-100')}>
                      <Input placeholder="email" type="email" {...field} />
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
                  <FormLabel className={cn(formLabelStyles)}>Password</FormLabel>
                  <FormControl className={cn('bg-zinc-100')}>
                      <Input placeholder="password" type="password" {...field} />
                  </FormControl>
                  {/* <FormDescription className={cn(descriptionStyles)}>
                      Input your password.
                  </FormDescription> */}
                  <FormMessage />
                  </FormItem>
              )}
              />
              <Button 
                  className='mt-5'
                  variant='submitForm' 
                  type="submit">Submit</Button>
          </form>
        </Form>
        <span className='flex w-full bg-transparent px-4 items-center justify-between'>
          <p className='ml-2 font-semibold text-zinc-500'>Already a member?</p>
          <Button 
          onClick={() => loginBtnHandler()}
          variant='secondary'>Log in</Button>
        </span>
      </motion.span>
        : 
        <span className='min-h-[60vh] p-4'>
            <h1 className='font-3xl'>Registration has been successful.</h1>
            <p>Verification e-mail has been sent to your mailbox.</p>
        </span> }
    </AnimatePresence>
  )
}

export default RegistrationForm;