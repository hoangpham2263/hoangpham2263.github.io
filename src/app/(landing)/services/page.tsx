import { ServicesView, servicesMetadata } from "@/views/services";

export const metadata = servicesMetadata("vi");

export default function ServicesPage() {
  return <ServicesView locale="vi" />;
}
