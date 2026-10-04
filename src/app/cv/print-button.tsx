import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const CV_PDF_PATH = "/Pham-Quoc-Hoang-CV.pdf";

export function PrintButton() {
  return (
    <Button size="sm" className="shadow-none" asChild>
      <a href={CV_PDF_PATH} download="Pham-Quoc-Hoang-CV.pdf">
        <Download size={14} />
        Download CV
      </a>
    </Button>
  );
}
