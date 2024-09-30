import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";
import Image from "next/image";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <Image
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                About{" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Build.it{" "}
                </span>{" "}
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Build.it is an AI software service provider company that helps
                businesses improve their operations and customer experience
                using AI and machine learning. Our team of experts has years of
                experience in developing and deploying AI solutions that drive
                real results. We are dedicated to providing the best possible
                service to our clients and to helping them achieve their goals.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
