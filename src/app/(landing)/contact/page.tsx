import ContactView, { contactMetadata } from "@/views/contact";

export const metadata = contactMetadata("vi");

export default function ContactPage() {
  return <ContactView locale="vi" />;
}
