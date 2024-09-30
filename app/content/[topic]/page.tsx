import { notFound } from "next/navigation";
import { ArrowRight, BookOpen, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  backendDeveloperCourse,
  cppDeveloperCourse,
  frontendDeveloperCourse,
  fullstackDeveloperCourse,
  javaDeveloperCourse,
  pythonDeveloperCourse,
} from "@/course";
import Link from "next/link";

const coursesMap = {
  "frontend-developer": frontendDeveloperCourse,
  "backend-developer": backendDeveloperCourse,
  "fullstack-developer": fullstackDeveloperCourse,
  "java-developer": javaDeveloperCourse,
  "python-developer": pythonDeveloperCourse,
  "cpp-developer": cppDeveloperCourse,
};

interface Section {
  subheading: string;
  description: string;
}

interface Course {
  title: string;
  skills: string[];
  description: string;
  sections: Section[];
}

export default function Page({ params }: { params: { topic: string } }) {
  const course = coursesMap[params.topic] as Course | undefined;

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        <h1 className="text-4xl font-extrabold text-primary text-center mb-8 animate-slide-up flex flex-col sm:flex-row items-center justify-center gap-4">
          {course.title}{" "}
          <Link href={`/certificate/${params.topic}`}>
            <Button size="lg" className="group">
              Continue
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </h1>

        <Card className="mb-8 bg-muted/15 backdrop-filter backdrop-blur-lg animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl font-semibold ">
              <BookOpen className="mr-2" />
              Course Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className=" mb-4">{course.description}</p>
            <div className="flex flex-wrap gap-2">
              {course.skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="default"
                  className="text-sm animate-pop"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold text-primary mb-4 animate-slide-up">
          Course Sections
        </h2>

        <div className="space-y-4">
          {course.sections.map((section, index) => (
            <Card
              key={index}
              className="mb-4 bg-muted/15 backdrop-filter backdrop-blur-lg hover:shadow-lg transition-shadow duration-300 animate-slide-up"
            >
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold ">
                  <Code className="mr-2" />
                  {section.subheading}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="">{section.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 flex justify-center animate-slide-up"></div>
      </div>
      <div className="shadow dark:opacity-50"></div>
    </div>
  );
}
