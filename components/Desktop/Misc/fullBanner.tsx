import style from "/styles/Desktop/Misc/fullBanner.module.css"
import utilities from "/styles/utilities.module.css"
import Image from "next/image";
const idCarrouselBanner: string = "idCarrouselBanner"

export default function FullBanner({item}) {
    return (
        <a className={`${style.sizeImageBanner} ${utilities.snapScroll}`}>
            <Image priority={true} layout={"fill"} objectFit={"cover"} id={idCarrouselBanner} src={item} alt=""/>
        </a>
    )
}
