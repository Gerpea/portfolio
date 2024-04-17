import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import Header from "@/blocks/Header";
import Skills from "@/blocks/Skills";
import Projects from "@/blocks/Projects";
import Experience from "@/blocks/Experience";
import About from "@/blocks/About";
import Contact from "@/blocks/Contact";
import Logo from "@/components/Logo";
import styles from "./page.module.css";

export default function Home({ params: { locale } }: { params: { locale: string }; }) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('Main')

  return (
    <main className={styles.main}>
      <Header />
      <Skills style={{ paddingTop: '2.25rem' }} />
      <Projects className={styles.projects} />
      <Experience className={styles.experiences} />
      <About className={styles.about} />
      <Contact className={styles.contacts} contact={t('contact')} delivered_btn={t('delivered_btn')} message_hint={t('message_hint')} reach_hint={t('reach_hint')} send_btn={t('send_btn')} />
      <Logo style={{ paddingTop: '3rem' }} className={styles.logo} />
    </main>
  );
}
