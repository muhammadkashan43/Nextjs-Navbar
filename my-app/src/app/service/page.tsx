import style from "../styles/page.module.css";
import Header from "../Component/header";
import Link from "next/link";
export default function Services() {
  return (
    <div className={style.hero}>
      <Header />
      <div className="card">
        <h2>This is service page</h2>
      </div>
      <div className="card">
        <Link href='../service/nestedpage'>Click here for nested page</Link>
      </div>
    </div>
  );
}
