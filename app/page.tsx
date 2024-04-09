import Header from "@/blocks/Header";
import Skills from "@/blocks/Skills";
import Projects from "@/blocks/Projects";
import Experience from "@/blocks/Experience";
import About from "@/blocks/About";
import Contact from "@/blocks/Contact";
import Logo from "@/components/Logo";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Skills style={{ paddingTop: '2.25rem' }} />
      <Projects style={{ paddingTop: '0.75rem' }} />
      <Experience style={{ paddingTop: '1.5rem' }} />
      <About style={{ paddingTop: '1.5rem' }} />
      <Contact style={{ paddingTop: '1.5rem' }} id='contact' />
      <Logo style={{ paddingTop: '3rem' }} className={styles.logo} />
    </main>
  );
}
