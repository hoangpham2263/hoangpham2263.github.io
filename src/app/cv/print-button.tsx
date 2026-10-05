import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const CV_PDF_PATH = "/pham-quoc-hoang-cv.pdf";

export function PrintButton() {
  return (
    <Button size="sm" className="shadow-none" asChild>
      <a href={CV_PDF_PATH} download="pham-quoc-hoang-cv.pdf">
        <Download size={14} />
        Download CV
      </a>
    </Button>
  );
}
