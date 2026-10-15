import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-[420px]">
        <CardHeader>
          <CardTitle>Không tìm thấy trang</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Trang bạn tìm không tồn tại hoặc đã được chuyển đi.
          </p>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <Link href="/">
              Về trang chủ
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
