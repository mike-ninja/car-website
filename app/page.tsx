import {
  Contact,
  Header,
  Packages,
  Services,
  Testimonials,
} from "@/components";

export default function Home() {
  return (
    <main>
      <Header />
      <Packages />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  );
}
