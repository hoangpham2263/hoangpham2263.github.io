"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-[420px]">
        <CardHeader>
          <CardTitle>Đã có lỗi xảy ra!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Có lỗi khi tải trang này.
          </p>
        </CardContent>
        <CardFooter>
          <Button
            onClick={
              () => reset()
            }
            variant="default"
          >
            Thử lại
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
