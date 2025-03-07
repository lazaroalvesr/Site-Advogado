import { About } from "@/_components/About";
import { AreaOfActivity } from "@/_components/AreaOfActivity";
import { ClientReviews } from "@/_components/ClientReviews";
import { Initial } from "@/_components/Initial";

export default function Home() {
  return (
    <>
      <Initial />
      <About />
      <AreaOfActivity />
      <ClientReviews />
    </>
  );
}
