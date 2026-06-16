import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import MenuDuJour from "@/components/sections/MenuDuJour";
import ALaCarte from "@/components/sections/ALaCarte";
import Evenement from "@/components/sections/Evenement";
import Hours from "@/components/sections/Hours";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuDuJour />
        <ALaCarte />
        <Evenement />
        <Hours />
      </main>
      <Footer />
    </>
  );
}
