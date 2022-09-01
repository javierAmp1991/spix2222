import style from "/styles/Desktop/Search/layoutPrincipal.module.css"
import styleMobile from "/styles/Mobile/Search/layoutPrincipalFilterMobile.module.css"
import utilities from "/styles/utilities.module.css"
import {DropDownData} from "../dataDemo/data"
import EventVerticalView from "../components/Desktop/EventsView/eventVerticalView";
import LayoutButtonNavegation from "../components/Desktop/Layouts/layoutButtonNavegation";
import ButtonNavegation from "../components/Desktop/Misc/buttonNavegation";
import MainContainerFilters from "../components/Desktop/Search/mainContainerFilters";
import React, {useState} from "react";
import {useMediaQuery} from "./index";
import EventHorizontalView from "../components/Mobile/Events/eventHorizontalView";
import LayoutPrincipalFilterMobile from "../components/Mobile/Search/layoutPrincipalFilterMobile";
import ButtonNavegationMobile from "../components/Mobile/Misc/buttonNavegationMobile";
import Image from "next/image";
import {GlobalConst} from "../public/globalConst";
import DefaultLayoutMobile from "../components/Mobile/defaultLayoutMobile";
import DefaultLayoutDesktop from "../components/Desktop/defaultLayoutDesktop";

let AntSig: string[] = ["Anterior", "Siguiente"]

export default function SearchRestaurant() {
    let [isDarkMode, setIsDarkModeP] = React.useState(false);
    let [isDisplayResult, setIsDisplayResult] = useState(true)
    let [isOpenFilters, setIsOpenFilters] = useState(true)
    const darkModeToggle = () => setIsDarkModeP(isDarkMode = !isDarkMode)
    const handleClick = () => setIsDisplayResult(isDisplayResult = !isDisplayResult)
    const handleOpenFilter = () => setIsOpenFilters(isOpenFilters = !isOpenFilters)
    const isSmallDown = useMediaQuery('(max-width: 768px)');
    let cssStyle = getCssStyle()
    const isCategory: boolean = true

    //region desktop Components
    let dropDown =
        DropDownData.listDropDown.map((item, index) =>
            <EventVerticalView key={index} isHideName={false} dropDown={true} darkModeState={isDarkMode} info={item}/>
        )

    let buttonsNavegation = <LayoutButtonNavegation>
        {
            AntSig.map(item =>
                <ButtonNavegation isDarkMode={isDarkMode} key={item} item={item}/>
            )
        }
    </LayoutButtonNavegation>
    //endregion
    //region mobile Components
    let dropDownMobile = DropDownData.listDropDown.map((item, index) =>
        <EventHorizontalView darkModeState={isDarkMode} info={item} key={index}></EventHorizontalView>
    )
    let buttonsNavegationMobile =
        <LayoutButtonNavegation>
            {
                AntSig.map((item, index) =>
                    <ButtonNavegationMobile isDarkMode={isDarkMode} item={item} key={index}/>
                )
            }
        </LayoutButtonNavegation>
    //endregion

    return (
        isSmallDown ?
            <DefaultLayoutMobile isDarkMode={isDarkMode}>
                <div className={cssStyle.bg}>
                    <div className={style.styleBanner}>
                        <Image layout={"fill"} objectFit={"cover"} objectPosition={"center"}
                               src="/images/bannerFood.jpg" alt=""/>
                    </div>
                    <LayoutPrincipalFilterMobile isCategory={isCategory}
                                                 handleOpenFilter={handleClick}
                                                 isDarkMode={isDarkMode}
                                                 isOpenFilter={isDisplayResult}/>

                    {
                        isDisplayResult &&
                        <div className={"relative"}>
                            <div className={style.paddingContainer}>
                                <div className={styleMobile.gridResultFiltersOut}>
                                    <div className={`${cssStyle.fontSubTitle}`}>
                                        Restaurantes
                                    </div>
                                    <button className={`${utilities.gridMaxContent2} gap-2 items-center`}>
                                        <div className={utilities.fontPrimaryText}>
                                            Filtros
                                        </div>
                                        <div onClick={handleClick} className={"h-3 w-4 relative"}>
                                            <Image layout={"fill"}
                                                   src={GlobalConst.sourceImages.engineIcon} alt={""}/>
                                        </div>
                                    </button>
                                </div>

                                <div className={style.gridResult}>
                                    {dropDownMobile}
                                </div>
                                {buttonsNavegationMobile}
                            </div>
                        </div>
                    }
                </div>
            </DefaultLayoutMobile>
            /*<div>
                {
                    isDiplaySug ?
                        <SuggHeaderMobile returnMet={handleIsDisplaySug}/>
                        :
                        <div className={`${isDesplegable && utilities.noScrollBody} relative overflow-x-hidden`}>
                            <HeaderSpixMobile isDesplegable={handleDesplegable}
                                              displaySug={handleIsDisplaySug}
                                              isDarkMode={isDarkMode}/>
                            <MenuSpixMobile isDarkMode={isDarkMode} listItemMenu={Menu.listMenu}/>
                            <div className={cssStyle.bg}>
                                <div className={style.styleBanner}>
                                    <Image layout={"fill"} objectFit={"cover"} objectPosition={"center"}
                                           src="/images/bannerFood.jpg" alt=""/>
                                </div>
                                <LayoutPrincipalFilterMobile isCategory={isCategory}
                                                             handleOpenFilter={handleClick}
                                                             isDarkMode={isDarkMode}
                                                             isOpenFilter={isDisplayResult}/>

                                {
                                    isDisplayResult &&
                                    <div className={"relative"}>
                                        <div className={style.paddingContainer}>
                                            <div className={styleMobile.gridResultFiltersOut}>
                                                <div className={`${cssStyle.fontSubTitle}`}>
                                                    Restaurantes
                                                </div>
                                                <button className={`${utilities.gridMaxContent2} gap-2 items-center`}>
                                                    <div className={utilities.fontPrimaryText}>
                                                        Filtros
                                                    </div>
                                                    <div onClick={handleClick} className={"h-3 w-4 relative"}>
                                                        <Image layout={"fill"}
                                                               src={GlobalConst.sourceImages.engineIcon}/>
                                                    </div>
                                                </button>
                                            </div>

                                            <div className={style.gridResult}>
                                                {dropDownMobile}
                                            </div>
                                            {buttonsNavegationMobile}
                                        </div>
                                    </div>
                                }
                            </div>
                            <div
                                className={isDesplegable ? styleMobile.menuDesplegableOut : styleMobile.menuDesplegableIn}>
                                <SideSetting closeDesplegable={handleDesplegable}/>
                            </div>
                        </div>
                }
            </div>*/
            :
            <DefaultLayoutDesktop isDarkMode={isDarkMode} isLogged={false} darkModeToggle={darkModeToggle}>
                <div className={`${cssStyle.bg} ${utilities.maxWidthBodyContentSpix}`}>
                    <div className={style.styleBanner}>
                        <Image layout={"fill"} objectFit={"cover"} objectPosition={"center"}
                               src="/images/bannerFood.jpg" alt=""/>
                    </div>
                    <div className={`${cssStyle.gridFilterDesktop}`}>
                        <div className={`${cssStyle.mainContainer} ${cssStyle.bgInfo}`}>
                            {
                                <MainContainerFilters isCategory={isCategory} isDarkMode={isDarkMode}
                                                      isOpenFilter={isOpenFilters}
                                                      closeFilters={handleOpenFilter}/>
                            }
                        </div>
                        <div>
                            <div className={style.paddingLeftResult}>
                                <div className={`${cssStyle.fontTitle} ${style.styleTitleResult}`}>
                                    Restaurantes
                                </div>
                                <div className={cssStyle.gridSearch}>
                                    {dropDown}
                                </div>
                            </div>
                            {buttonsNavegation}
                        </div>
                    </div>
                </div>
            </DefaultLayoutDesktop>
        /*            <div>
                        <HeaderSpixDesktop darkMode={isDarkMode} isLogged={false} toggleDarkMode={darkModeToggle}/>
                        <MenuSpixDesktop darkMode={isDarkMode} listItemMEnu={Menu.listMenu}/>
                        <div className={`${cssStyle.bg} ${utilities.maxWidthBodyContentSpix}`}>
                            <div className={style.styleBanner}>
                                <Image layout={"fill"} objectFit={"cover"} objectPosition={"center"}
                                       src="/images/bannerFood.jpg" alt=""/>
                            </div>
                            <div className={`${cssStyle.gridFilterDesktop}`}>
                                <div className={`${cssStyle.mainContainer} ${cssStyle.bgInfo}`}>
                                    {
                                        <MainContainerFilters isCategory={isCategory} isDarkMode={isDarkMode}
                                                              isOpenFilter={isOpenFilters}
                                                              closeFilters={handleOpenFilter}/>
                                    }
                                </div>
                                <div>
                                    <div className={style.paddingLeftResult}>
                                        <div className={`${cssStyle.fontTitle} ${style.styleTitleResult}`}>
                                            Resultados de {"conciertos"}
                                        </div>
                                        <div className={cssStyle.gridSearch}>
                                            {dropDown}
                                        </div>
                                    </div>
                                    {buttonsNavegation}
                                </div>
                            </div>
                        </div>
                    </div>*/
    )

    function getCssStyle() {
        return {
            bg: isDarkMode ? utilities.bgBodyDarkMode : utilities.bgBodyNormal,
            bgInfo: isDarkMode ?
                isOpenFilters ? utilities.bgDarkModeInfo : ""
                :
                utilities.bgNormalInfo,
            gridFilterDesktop: isOpenFilters ? style.gridPrincipal : style.gridPrincipalClose,
            mainContainer: isDarkMode ? style.mainContainerPropertiesDarkMode : style.mainContainerProperties,
            gridSearch: isOpenFilters ? style.gridSearchOpen : style.gridSearchClose,
            fontTitle: isDarkMode ? utilities.fontTitleDarkMode : utilities.fontTitle,
            fontSubTitle: isDarkMode ? utilities.fontSubTitleDarkMode : utilities.fontSubTitle,
        }
    }
}