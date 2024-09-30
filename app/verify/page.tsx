import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

type VerifyPageProps = {
  searchParams: {
    firstname?: string;
    lastname?: string;
    topic?: string;
  };
};

export default function VerifyPage({ searchParams }: VerifyPageProps) {
  const { firstname, lastname, topic } = searchParams;
  const fullName =
    [firstname, lastname].filter(Boolean).join(" ") || "Candidate";
  const id = Math.floor(1000000000 + Math.random() * 9000000000).toString();

  return (
    <div className="min-h-screen bg-gradient-to-b flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl rounded-lg shadow-2xl overflow-hidden">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <CheckCircle className="w-20 h-20 text-primary mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Certificate Verified</h1>
            <p className="text-xl">
              The candidate has successfully completed 1 month internship
              program at BUILD.IT
            </p>
          </div>
          <div className=" p-6 rounded-lg mb-8">
            <table className="w-full text-left">
              <tbody>
                <tr className="border-b">
                  <th className="py-3 ">Name</th>
                  <td className="py-3 font-semibold">{fullName}</td>
                </tr>
                <tr className="border-b ">
                  <th className="py-3 ">Domain</th>
                  <td className="py-3 font-semibold">
                    {topic || "Not specified"}
                  </td>
                </tr>
                <tr>
                  <th className="py-3 ">Certificate ID</th>
                  <td className="py-3 font-semibold">{id}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center text-sm ">
            <p>This certificate is proudly issued by BUILD.IT</p>
            <p>
              Verify the authenticity of this certificate using the Certificate
              ID
            </p>
          </div>
        </CardContent>
      </Card>
      <div className="shadow"></div>
    </div>
  );
}
