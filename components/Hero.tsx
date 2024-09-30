import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Build.It
            </span>{" "}
            Crafting{" "}
          </h1>{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Websites & Softwares
            </span>{" "}
            To make a change
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Empowering Innovation Across All Software Frontiers!
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Link href={"/work-for-us"}>
            <Button className="w-full md:w-1/3">Work For Us</Button>
          </Link>

          <Link
            rel="noreferrer noopener"
            href="/hire-us"
            className={`w-full  md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Hire Us For Your Next Project
          </Link>
          <Link
            rel="noreferrer noopener"
            href="/our-interns"
            className={`w-full sm:hidden md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            View Past Interns{" "}
          </Link>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
