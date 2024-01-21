'use client'

import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { VscUnlock } from "react-icons/vsc";
import { authLogicStore } from "@/lib/zustand-store";

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

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
import { usePathname, useRouter } from "next/navigation";

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

// COMPONENT
const LoginForm = () => {

  const path = usePathname();
  const router = useRouter();

  const registerBtnHandler = () => {
    if (path === '/login') {
        router.push('/register')
    }
    authLogicHandler.setStage('register')
}

  const authLogicHandler = authLogicStore();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	})

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values)
	}
    
  
  // async function create(formData: FormData) {
  //   'use server';
  //   fetch('https://jsonplaceholder.typicode.com/todos/2')
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  // }

  const formStyles = 'flex flex-col h-full w-full p-4 gap-4'

  const loginText = 'text-2xl'
  const formLabelStyles = 'text-zinc-700 ml-2 text-lg'
//   const descriptionStyles = 'font-sm text-zinc-700'
  
  return (
    <AnimatePresence mode="wait">
      <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className={cn(formStyles)} autoComplete="on">
              <span className='mb-4 gap-2 flex w-full items-center justify-center '>
                  <VscUnlock size={28} />
                  <Label className={cn(loginText)}>Log in</Label>
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
                  {/* <FormDescription className={cn(descriptionStyles)}>
                      This is your public display name.
                  </FormDescription> */}
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
          <p className='ml-2 font-semibold text-zinc-500'>Not registered?</p>
          <Button 
          onClick={() => registerBtnHandler()}
          variant='secondary'>Register</Button>
        </span>
      </motion.span>
    </AnimatePresence>
  )
}

export default LoginForm;