import About from "@/components/about";

import Contact from "@/components/contact";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import ParticlesComponent from "@/components/particles";
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Experience />
      <Contact />
      <ParticlesComponent id="particles"> </ParticlesComponent>
    </main>
  );
}
