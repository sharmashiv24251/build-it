export const Statistics = () => {
  interface statsProps {
    quantity: string;
    description: string;
  }

  const stats: statsProps[] = [
    {
      quantity: "7.5M+",
      description: "Lines of code",
    },
    {
      quantity: "1.8K+",
      description: "Stars on GitHub",
    },
    {
      quantity: "2.7K+",
      description: "Discussions on GitHub",
    },
    {
      quantity: "112",
      description: "Contributors",
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: statsProps) => (
          <div key={description} className="space-y-2 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold ">{quantity}</h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
