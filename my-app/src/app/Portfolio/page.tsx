import style from "../styles/page.module.css"
import Header from "../Component/header";

export default function Portfolio(){
    return(
      <div className={style.hero} >
      <Header />
      <div className="card">
        <h2>This is Portfolio page</h2>
      </div>
    </div>
  );
}