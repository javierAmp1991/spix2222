import style from "/styles/Desktop/Home/homeRoundedView.module.css"
import utilities from "/styles/utilities.module.css"
import Image from "next/image";

export default function HomeRoundedView({info, darkModeState}) {
    let cssStyles = getCssStyles()
    return (
        <div className={`${style.mainDiv} ${utilities.borderRadious50}`}>
            <div className={`${style.paddingGradient} ${utilities.borderRadious50} ${cssStyles.bgFirstGradient}`}>
                <div className={`${style.paddingGradient} ${utilities.borderRadious50} ${cssStyles.bgSecondGradient}`}>
                    <div className={style.sizeImageRoundedCarrousel}>
                        <Image layout={"fill"} src={info.CoverImage} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )

    function getCssStyles() {
        return {
            borderCard: darkModeState ? utilities.borderCardsDarkMode : utilities.borderCards,
            bgFirstGradient: darkModeState ? utilities.bgFirstGradientDarkMode : utilities.bgFirstGradient,
            bgSecondGradient: darkModeState ? utilities.bgSecondGradientDarkMode : utilities.bgSecondGradient
        }
    }
}