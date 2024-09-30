import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

const internshipRoles = [
  {
    title: "Frontend Developer",
    slug: "frontend-developer",
    skills: ["HTML", "CSS", "React", "JavaScript"],
    popular: Boolean(Math.round(Math.random())),
  },
  {
    title: "Backend Developer",
    slug: "backend-developer",
    skills: ["Node.js", "Express", "MongoDB"],
    popular: Boolean(Math.round(Math.random())),
  },
  {
    title: "Fullstack Developer",
    slug: "fullstack-developer",
    skills: ["HTML, CSS, React, JavaScript", "Node.js, Express, MongoDB"].map(
      (skills) => skills.split(", ").join(", ")
    ),
    popular: Boolean(Math.round(Math.random())),
  },
  {
    title: "Java Developer",
    slug: "java-developer",
    skills: ["Java"],
    popular: Boolean(Math.round(Math.random())),
  },
  {
    title: "Python Developer",
    slug: "python-developer",
    skills: ["Python (Django)"],
    popular: Boolean(Math.round(Math.random())),
  },
  {
    title: "C++ Developer",
    slug: "cpp-developer",
    skills: ["C++"],
    popular: Boolean(Math.round(Math.random())),
  },
];

const Interns = () => {
  return (
    <section className="container mx-auto py-20">
      <h1 className="text-5xl font-bold text-center mb-10">We Need Interns!</h1>
      <p className="text-xl text-muted-foreground text-center mb-10">
        Join our team and kickstart your career with hands-on experience in
        various technologies!
      </p>

      <div className="grid grid-cols-1 mx-auto  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {internshipRoles.map((role) => (
          <Card
            key={role.title}
            className=" sm:w-72 w-full flex-grow  drop-shadow-xl shadow-black/30 dark:shadow-white/10"
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {role.title}
                {role.popular && (
                  <Badge
                    variant="secondary"
                    className="text-xsm text-center text-primary"
                  >
                    Most popular
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <Link href={`/content/${role.slug}`}>
                <Button className="w-full">Apply</Button>
              </Link>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {role.skills.map((benefit: string) => (
                  <span key={benefit} className="flex">
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
        <div className="shadow"></div>
      </div>
    </section>
  );
};

export default Interns;
