import Header from "@/components/Header";
import styles from "./page.module.css";
import Icon from "@/components/Icon";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header level="1">Hello</Header>
      <Icon name="telegram" size={16}/>
    </main>
  );
}
