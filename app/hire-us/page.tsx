"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const HireUs = () => {
  const { toast } = useToast();

  function onClick() {
    toast({
      title: "We Will Be In Touch Soon! ✅",
    });
  }

  return (
    <section className="container mx-auto py-20">
      <h1 className="text-5xl font-bold text-center mb-10 opacity-90">
        Hire Us for Your Next Project
      </h1>
      <p className="text-xl text-muted-foreground text-center mb-6 opacity-80">
        We're excited to hear about your project!
      </p>

      <form className="max-w-lg mx-auto space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-2 border border-gray-400 rounded"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-lg font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-2 border border-gray-400 rounded"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-lg font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full p-2 border border-gray-400 rounded"
          />
        </div>

        <Button type="submit" onClick={onClick} className="w-full">
          Submit
        </Button>
      </form>
      <div className="shadow"></div>
    </section>
  );
};

export default HireUs;
