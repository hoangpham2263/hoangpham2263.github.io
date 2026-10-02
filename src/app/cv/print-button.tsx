"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function PrintButton() {
  return (
    <Button size="sm" className="shadow-none" onClick={() => window.print()}>
      <Download size={14} />
      Download PDF
    </Button>
  );
}
