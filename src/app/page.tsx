import About from "@/components/about";
import Contacts from "@/components/contacts";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Portfolio from "@/components/portfolio";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <>
    <Navbar/>
    <br className="md:hidden"></br>
    <br className="md:hidden"></br>
    <br className="md:hidden"></br>
    <Hero/>
    <About/>
    <Portfolio/>
    <Skills/>
    <Contacts/>
    <Footer/>
    </>
  );
}
