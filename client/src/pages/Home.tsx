import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TaskCategories } from "@/components/sections/TaskCategories";
import { NftRewards } from "@/components/sections/NftRewards";
import { EarlyAccess } from "@/components/sections/EarlyAccess";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <HowItWorks />
      <TaskCategories />
      <NftRewards />
      <EarlyAccess />
      <Faq />
      <Footer />
    </div>
  );
}
