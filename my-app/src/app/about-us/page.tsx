import style from "../styles/page.module.css"
import Header from "../Component/header"

export default function Aboutus(){
    return(
        <div className={style.hero} >
        <Header />
        <div className="card">
        <h2>This is about page</h2>
      </div>
    </div>
    )
}