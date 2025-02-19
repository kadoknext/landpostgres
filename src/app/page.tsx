import Image from "next/image";
import { ModeToggle } from "./_components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
export default function Home() {
  return (
    <main className="">
      <section id="intro" className="space-y-6 py-8 md:py-12 lg:py-32">
      
        <div className="container mx-auto flex flex-col max-w-[64rem] items-center text-center gap-4">
        <iframe src="https://www.youtube.com/embed/KxQUKrQBGYo" allowFullScreen />
          <span className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium flex items-center">
            Full-stack Next.js 14 🚀
            <ModeToggle />
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold">
            The Next Dev <br />
            Full-stack <span className="text-primary">Next.js 14</span>
          </h1>
          <p className="text-muted-foreground max-w-[42rem] leading-normal sm:text-xl sm:leading-8">
            Invista na sua carreira e aprenda a desenvolver aplicações que as
            grandes empresas estão utilizando. Faça parte da próxima turma da
            formação mais completa de Next.js 14.
            <a
              href="https://www.youtube.com/watch?v=hJTPDo8JlMc"
              target="_blank"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Video: 38:00 min
            </a>
          </p>
          <div className="space-x-4">
            <a
              href="#investment"
              className="bg-primary hover:bg-primary/90 duration-300 px-4 py-2 text-white font-semibold text-md rounded shadow-lg"
            >
              Quero fazer parte
            </a>
            <a
              href="#feature"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Saiba mais
            </a>
          </div>
        </div>
      </section>
      <section id="about">
        <h1 className="text-primary">Sobre</h1>
      </section>
      <section id="feature">
        <h1 className="text-primary">Tech Stack</h1>
      </section>
      <section id="investment">
        <h1 className="text-primary">Investment</h1>
      </section>
      <section id="faq">
        <h1 className="text-primary">Faq</h1>
      </section>
    </main>
  );
}
