import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  s: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Emily Carter",
    userName: "@EmilyCarter",
    comment:
      "Build it is the best solution for my company. They are a software service company that provides a full-stack landing page template with a simple and easy-to-use interface to build a website.",
    s: "EC",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Lucas Thompson",
    userName: "@lthompson",
    comment:
      "I had a great experience with Build it. They are a software service company that provides a full-stack landing page template with a simple and easy-to-use interface to build a website.",
    s: "LT",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Mark Doe",
    userName: "@mark_Doe2",
    s: "MD",
    comment:
      "Build it is a game-changer for me. They are a software service company that provides a full-stack landing page template with a simple and easy-to-use interface to build a website.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sophie Reynolds",
    userName: "@sophie_reynolds",
    comment:
      "I was able to build my website in just a few hours using Build it. They are a software service company that provides a full-stack landing page template with a simple and easy-to-use interface to build a website.",
    s: "SR",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Nathaniel Brooks",
    userName: "@nathaniel_brooks",
    s: "NB",
    comment:
      "Build it is the best solution for my company. They are a software service company that provides a full-stack landing page template with a simple and easy-to-use interface to build a website.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Isabella Martinez",
    userName: "@isabella_martinez",
    s: "IM",
    comment:
      "I had a great experience with Build it. They are a software service company that provides a full-stack landing page template with a simple and easy-to-use interface to build a website.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        Us
      </h2>

      <p className="text-xl text-muted-foreground pb-8"></p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ s, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarFallback>{s}</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
