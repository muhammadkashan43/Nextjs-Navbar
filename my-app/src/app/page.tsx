'use client'
import Header from "./Component/header";
import style from "./styles/page.module.css";
const home = () => {
  return (
    <div className={style.hero}>
      
      <Header />
      <div className="card">
        <h2>This is home page</h2>
      </div>
    </div>
  );
};

export default home;
