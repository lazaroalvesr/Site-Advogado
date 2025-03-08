import { About } from "@/_components/About";
import { AreaOfActivity } from "@/_components/AreaOfActivity";
import { ClientReviews } from "@/_components/ClientReviews";
import { ContactForm } from "@/_components/ContactForm";
import { Initial } from "@/_components/Initial";

export default function Home() {
  return (
    <>
      <Initial />
      <About />
      <AreaOfActivity />
      <ClientReviews />
      <ContactForm />
    </>
  );
}
