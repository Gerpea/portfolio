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
      <Projects className={styles.projects}/>
      <Experience className={styles.experiences} />
      <About className={styles.about} />
      <Contact className={styles.contacts}/>
      <Logo style={{ paddingTop: '3rem' }} className={styles.logo} />
    </main>
  );
}
