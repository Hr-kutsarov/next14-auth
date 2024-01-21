// libs
import { cn } from "@/lib/utils";
// components
import LoadingPage from '@/components/loading/loading-page'
import Navigation from "@/components/navigation/overhead-navbar";
// 
export default function Home() {
  const mainStyles = "flex min-h-screen flex-col items-center justify-between bg-zinc-900 p-4"
  return (
    <main className={cn(mainStyles)}>
      <Navigation />
      <LoadingPage />
    </main>
  );
}
