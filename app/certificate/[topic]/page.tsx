"use client";
import Image from "next/image";
import { useRef } from "react";
import React, { useState } from "react";
import certificate from "@/assets/certificate.png";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import QRCode from "react-qr-code";
import { Card } from "@/components/ui/card";

const url = process.env.NEXT_PUBLIC_URL;

const Page = ({ params }) => {
  const printRef = useRef();
  const { topic } = params; // Access topic from params
  const [drawerOpen, setDrawerOpen] = useState(true); // Initially open
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const getFormattedTopic = (topic) => {
    const topicMap = {
      "frontend-developer": "Frontend Development",
      "backend-developer": "Backend Development",
      "java-developer": "Java Development",
      "python-developer": "Python Development",
      "cpp-developer": "C++ Development",
      "fullstack-developer": "Fullstack Development",
    };
    return topicMap[topic] || "Unknown Topic"; // Default case if no match found
  };

  const formattedTopic = getFormattedTopic(topic); // Get formatted topic

  const handleSubmit = (e) => {
    e.preventDefault();
    setDrawerOpen(false); // Close drawer on submit
  };
  const handlePrint = () => {
    const content = document.getElementById("certificate");
    if (content) {
      const printWindow = window.open("", "_blank", "width=1000,height=800");

      // Get all stylesheets from the current document
      const styles = Array.from(document.styleSheets)
        .map((styleSheet) => {
          try {
            return Array.from(styleSheet.cssRules)
              .map((rule) => rule.cssText)
              .join("");
          } catch (e) {
            console.log(
              "Access to stylesheet blocked by CORS policy:",
              styleSheet.href
            );
            return "";
          }
        })
        .join("\n");

      printWindow.document.write(`
        <html>
          <head>
            <title>Download Certificate</title>
            <style>
              ${styles}
              body { 
                margin: 0; 
                padding: 0;
                width: 100%;
                height: 100%;
              }
              @page {
                size: landscape;
                margin: 0;
              }
              @media print {
                body { 
                  -webkit-print-color-adjust: exact;
                }
                img { 
                  max-width: 100%; 
                  height: auto; 
                }
                #certificate-container {
                  width: 100%;
                  height: 100vh;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
              }
              #certificate-container { 
                width: 1000px; 
                height: 706px; 
                position: relative;
                margin: auto;
              }
            </style>
          </head>
          <body>
            <div id="certificate-container">
              ${content.innerHTML}
            </div>
            <script>
              function loadImage(img) {
                return new Promise((resolve, reject) => {
                  if (img.complete) {
                    resolve();
                  } else {
                    img.onload = resolve;
                    img.onerror = reject;
                  }
                });
              }
  
              const images = Array.from(document.images);
              Promise.all(images.map(loadImage))
                .then(() => {
                  window.print();
                  window.onafterprint = function() {
                    window.close();
                  };
                })
                .catch(error => console.error('Error loading images:', error));
            </script>
          </body>
        </html>
      `);

      printWindow.document.close();
    } else {
      console.error("Element with id 'certificate' not found");
    }
  };
  return (
    <div>
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent className="min-h-[600px] sm:min-h-[300px] container flex flex-col">
          <DrawerHeader>
            <DrawerTitle>Certificate Information</DrawerTitle>
            <DrawerDescription>Fill in the details below</DrawerDescription>
          </DrawerHeader>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <Button type="submit">Submit</Button>
          </form>
        </DrawerContent>
      </Drawer>
      <div className="flex mt-5 flex-col sm:flex-row gap-4 container  mb-5">
        <Card className="p-5 sm:hidden min-h-[300px] flex flex-col items-center justify-center ">
          <h1 className="text-3xl text-primary font-bold">Certificate Ready</h1>
          <p className="mt-3">Click The Button Below to Download</p>
          <div className="shadow"></div>
        </Card>
        <Button onClick={handlePrint} className="">
          Download
        </Button>
        <Button onClick={() => setDrawerOpen(true)} className="">
          Edit
        </Button>
      </div>
      {firstName && lastName && (
        <div
          ref={printRef}
          id="certificate"
          className="hidden sm:block container"
        >
          <CertificateComponent
            first={firstName}
            last={lastName}
            topic={formattedTopic}
          />
        </div>
      )}
      {!firstName && !lastName && (
        <div className="w-full">
          <h1 className="text-center text-3xl ">Please Enter Name</h1>
          <p className="text-center">hint: click on edit button</p>
        </div>
      )}
    </div>
  );
};

const CertificateComponent = ({ first, last, topic }) => {
  return (
    <>
      <div className="relative h-[706px] w-[1000px] sm:scale-[1] scale-[0.45] left-[-350px] top-[-200px] sm:top-0 sm:left-0">
        <div className="absolute inset-0 z-0">
          <Image
            src={certificate}
            layout="fill"
            objectFit="cover"
            alt="Certificate Background"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full ">
          <h1 className="text-6xl font-extrabold text-[#1c498e] absolute top-[180px] left-[390px] dancing-script ">
            {first.charAt(0).toUpperCase() + first.slice(1).toLowerCase()}{" "}
            {last.charAt(0).toUpperCase() + last.slice(1).toLowerCase()}
          </h1>
          <h1 className="text-4xl font-extrabold text-[#1c498e] absolute top-[371px] left-[430px] marcellus-regular ">
            {topic}
          </h1>
          <h1 className="text-xs opacity-80 text-[black] absolute top-[613px] left-[390px] marcellus-regular ">
            {Math.floor(10000000000 + Math.random() * 90000000000)}
          </h1>
          <h1 className="text-xs opacity-80 text-[black] absolute top-[613px] left-[607px] marcellus-regular ">
            {new Date().toLocaleDateString()}
          </h1>
          <div className=" h-[125px] w-[129px] absolute top-[470px] left-[806px]">
            <MyQRCode
              value={`https://build-it-sigma.vercel.app/verify?firstname=${first}&lastname=${last}&topic=${topic}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const MyQRCode = ({ value }) => {
  return <QRCode className="h-[125px] w-[129px]" value={value} size={256} />;
};

export default Page;
