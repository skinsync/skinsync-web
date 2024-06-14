import Hero from "@/components/hero";
import Team from "@/components/team";

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

        <section id="team" className="relative w-full">
          <Team />
        </section>
      </div>
    </main>
  );
}
