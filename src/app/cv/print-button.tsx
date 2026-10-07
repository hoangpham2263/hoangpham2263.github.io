import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export const CV_PDF_PATH = "/pham-quoc-hoang-cv.pdf";

export function PrintButton() {
  return (
    <Button size="sm" className="shadow-none" asChild>
      <a href={CV_PDF_PATH} target="_blank" rel="noopener noreferrer">
        <FileText size={14} />
        View CV
      </a>
    </Button>
  );
}
