import Location from "@/components/location/Location";
import styles from "./page.module.css";
import Search from "@/components/search/Search";
import Header from "@/components/header/Header";
import Content from "@/components/content/Content";


export default function Home() {
  return (
    <div className={styles.main}>
      <Header/>
      <Search />
      <Location />
      <Content/>
    </div>
  );
}
