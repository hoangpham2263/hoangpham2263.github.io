import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

// Downloads the one-page PDF resume that mirrors this page
export function PrintButton({ href }: { href: string }) {
  return (
    <Button size="sm" className="shadow-none" asChild>
      <a href={href} download>
        <Download size={14} />
        Download PDF
      </a>
    </Button>
  );
}
