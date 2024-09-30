import React from "react";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon } from "lucide-react";

interface Certificate {
  id: number;
  created_at: string;
  first_name: string;
  last_name: string;
  topic: string;
}

const CertificatesPage = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from("Certificate")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(20);

  if (error) {
    console.error("Error fetching certificates:", error);
    return <div>Error loading certificates</div>;
  }

  const certificates: Certificate[] = data || [];

  // Debug log
  console.log("Certificates data:", JSON.stringify(certificates, null, 2));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Past Interns</h1>
      {certificates.length === 0 ? (
        <p className="text-center text-gray-500">No intern records found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((intern) => (
            <Card
              key={intern.id}
              className="overflow-hidden transition-shadow hover:shadow-lg"
            >
              <CardHeader className="bg-gradient-to-r from-green-700 to-green-500 text-white">
                <CardTitle className="text-xl font-semibold">
                  {intern.first_name} {intern.last_name}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <Badge
                  variant="secondary"
                  className="mb-2 bg-green-100 text-green-800"
                >
                  {intern.topic.replace("-", " ")}
                </Badge>
                <div className="flex items-center text-sm mt-2">
                  <CalendarIcon className="mr-2 h-4 w-4 text-green-500" />
                  <time dateTime={intern.created_at}>
                    {new Date(intern.created_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      <div className="shadow"></div>
    </div>
  );
};

export default CertificatesPage;
