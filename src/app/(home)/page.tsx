import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen max-w-screen-xl mx-auto h-full items-center font-sans">
      {/* <div className="relative flex">
        <div className="w-[770px] h-[770px] bg-[#FEE0C0] rounded-full -left-[300px] -top-[300px] absolute -z-2" />
      </div> */}

      <section id="hero" className="relative">
        <Hero />
      </section>

      
    </main>
  );
}
