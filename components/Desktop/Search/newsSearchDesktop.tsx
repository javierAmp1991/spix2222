import Image from "next/image";
import utilities from "/styles/utilities.module.css"
import style from "/styles/Desktop/Search/newsSearch.module.css"
import {News} from "../../../dataDemo/data";

const writeRNew: string = "Leer noticia"

export default function NewsSearchDesktop({item}: { item: News }) {
    return (
        <div className={style.mainCont}>
            <div className={style.sizeImage}>
                <Image layout={"fill"} src={item.PathImage} alt={""}/>
            </div>
            <div className={style.absCont}>
                <div>
                    <div className={`${style.fontTitle} ${utilities.clamp2}`}>
                        {item.Title}
                    </div>
                    <div className={`${utilities.fontPrimaryText} ${style.eventNew}`}>
                        {item.Date}
                    </div>
                </div>
                <div>
                    <div className={`${utilities.clamp2} ${style.fontSubTitle}`}>
                        {item.SubTitle}
                    </div>
                    <div className={`${utilities.styleLink} ${style.writeNew}`}>
                        {writeRNew}
                    </div>
                </div>
                {
                    item.HasEvent &&
                    <div className={style.gridButton}>
                        <button className={`${style.styleButtonNo} ${utilities.fontPrimaryText}`}>
                            Ir al Evento
                        </button>
                    </div>
                }
            </div>

        </div>
    )
}