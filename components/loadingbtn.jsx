"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const LoadBtn = ({ arrow, children }) => {
  const [loading, setLoading] = useState(false);
  return (
    <Button
      type="submit"
      size="lg"
      className="group"
      onClick={() => {
        setLoading(true);
      }}
    >
      {loading ? "Loading..." : children}
      {arrow ? (
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      ) : null}
    </Button>
  );
};

export default LoadBtn;
