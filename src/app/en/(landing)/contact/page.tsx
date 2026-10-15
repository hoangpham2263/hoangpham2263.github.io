import ContactView, { contactMetadata } from "@/views/contact";

export const metadata = contactMetadata("en");

export default function EnContactPage() {
  return <ContactView locale="en" />;
}
