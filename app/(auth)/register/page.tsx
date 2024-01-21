
import { cn } from "@/lib/utils";
import RegistrationForm from '@/components/auth/register-form'

export default function Page() {  
    // CSS
    const responsiveWrapperStyles = 'max-w-[660px]'
  
    return (
        <main className={cn('bg-zinc-900 p-8 h-full min-h-screen flex flex-col items-center justify-center')}>
            <section className={cn('bg-zinc-50 w-full shadow-lg shadow-zinc-100/10 h-full flex flex-col p-4 rounded-2xl', responsiveWrapperStyles)}>
                <RegistrationForm />
            </section>
        </main>
    )
}