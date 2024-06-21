import Hero from "@/components/hero";
import Team from "@/components/team";
import Features from "@/components/features";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full mx-auto h-full font-sans overflow-x-clip">
      <div className="flex flex-col items-center">
        <div className="relative flex">
          <div className="w-[770px] h-[770px] bg-[#FEE0C0] rounded-full left-[25px] -top-[300px] absolute -z-2" />
        </div>

        <section id="hero" className="relative w-full">
          <Hero />
        </section>

        <section id="" className="relative w-full mt-16">
          <div className="bg-[#FEE0C0] text-center text-5xl py-8 font-italiano text-[#595455]">
            know your skin problems and get your skincare recommendations
          </div>
          <img src="/image-8.png" alt="tutorial" className="w-full"/>
        </section>

        <section id="features" className="w-full mt-16">
          <Features />
        </section>

        <section id="team" className="relative w-full">
          <Team />
        </section>

        <section id="footer" className="w-full">
          <Footer />
        </section>
      </div>
    </main>
  );
}
