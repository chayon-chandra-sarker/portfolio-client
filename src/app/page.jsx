import About from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import Contact from "@/components/Home/Contact";
import Education from "@/components/Home/Education ";
import Projects from "@/components/Home/Projects";
import Skills from "@/components/Home/Skills";
import TechMarquee from "@/components/Home/TechMarquee";

export default function Home() {
  return (
    <div className="">
      <section id="home">
        <Banner></Banner>
      </section>
      <section>
        <TechMarquee></TechMarquee>
      </section>
      <section id="about">
        <About></About>
      </section>
      <section id="skill">
        <Skills></Skills>
      </section>
      <section>
        <Education></Education>
      </section>
      <section id="project">
        <Projects></Projects>
      </section>
      <section id="contact">
        <Contact></Contact>
      </section>
    </div>
  );
}