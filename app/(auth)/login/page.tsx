import { cn } from "@/lib/utils";
import LoginForm from "@/components/auth/login-form";

export default async function Page() {
  
  // async function create(formData: FormData) {
  //   'use server';
  //   fetch('https://jsonplaceholder.typicode.com/todos/2')
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  // }

  const responsiveWrapperStyles = 'max-w-[660px]'
  
  return (
    <main className={cn('bg-zinc-900 p-8 h-full min-h-screen flex flex-col items-center justify-center')}>
      <section className={cn('bg-zinc-50 w-full shadow-lg shadow-zinc-100/10 h-full flex flex-col p-4 rounded-2xl', responsiveWrapperStyles)}>
        {/* <form 
          className={cn('flex flex-col')}
          action={create}>
        <label>Login</label>
        <input type="text" name="name" />
        <button type="submit">Submit</button>
      </form> */}
      <LoginForm />
      </section>
    </main>
  )
}