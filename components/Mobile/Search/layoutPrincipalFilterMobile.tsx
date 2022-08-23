import utilities from "/styles/utilities.module.css"
import style from "../../../styles/Mobile/Search/layoutPrincipalFilterMobile.module.css";
import {GlobalConst} from "../../../public/globalConst";
import {FiltersData} from "../../../dataDemo/data";
import React, {useState} from "react";
import SubCategoryContainerMobile from "./subCategoryContainerMobile";
import AtributesContainerMobile from "./atributesContainerMobile";
import {SubcategoryFilter} from "../../Desktop/Search/subcategoryContainer";
import {AtributesDataFilter} from "../../../dataDemo/data";
import Image from "next/image";

let imageIcon = <Image className="h-4 w-full" src={GlobalConst.sourceImages.deleteIcon} alt=""/>

export default function LayoutPrincipalFilterMobile({hiddeResult, isDarkMode}) {
    let [displayFilter, setDisplayFilter] = React.useState(style.displayInFilters)

    function handleClick() {
        setDisplayFilter(
            displayFilter == style.displayInFilters ? style.displayOutFilters : style.displayInFilters
        )
        hiddeResult()
    }

    let [selectedTagsShow, setSelectedItemShow] = useState([])
    const addItem = (subCategory: SubcategoryFilter) => {
        setSelectedItemShow([...selectedTagsShow, subCategory])
    }


    const deleteItem = ((subCategory: SubcategoryFilter) => {
        const newItems: SubcategoryFilter[] = selectedTagsShow.filter(item => item != subCategory)
        setSelectedItemShow(selectedTagsShow = newItems)
    })

    const deleteAll = () => setSelectedItemShow([])

    const cssStyle = getCssStyle()

    return (
        <div className={`${displayFilter} ${cssStyle.bg}`}>
            <div className={`${style.gridTitle} ${cssStyle.borderBottom}`}>
                <div className={`${style.gridSelected}`}>
                    {
                        selectedTagsShow.map((item, index) =>
                            <div key={index} className={`${utilities.gridMaxContent2} gap-3 ${cssStyle.styleTags}`}>
                                <div className={utilities.clamp1}>
                                    {item.Name}
                                </div>
                                <button onClick={() => deleteItem(item)}>
                                    <div className="h-4 w-4 relative">
                                        <Image layout={"fill"} src={GlobalConst.sourceImages.deleteIcon} alt=""/>
                                    </div>
                                </button>
                            </div>
                        )
                    }
                </div>
                <div onClick={handleClick}
                     className={`grid items-center ${style.paddingFilters} ${cssStyle.borderLeft} ${cssStyle.fontSubTitle}`}>
                    Filtros
                </div>
            </div>
            <div>
                <AtributesContainerMobile isDarkMode={isDarkMode} click={addItem} item={AtributesDataFilter.atributes}/>
            </div>
            <div>
                {
                    FiltersData.listFilters.map(item =>
                        <SubCategoryContainerMobile isDarkMode={isDarkMode} click={addItem} key={item.FilterName}
                                                    item={item}/>
                    )
                }
            </div>
            <div className={`${utilities.gridMaxContent2} ${style.paddingCleanFilters} justify-between`}>
                <div className={cssStyle.fontName}>
                    Limpiar Filtros
                </div>
                <button onClick={deleteAll}>
                    <div className="h-4 w-3 relative">
                        <Image layout={"fill"} src={cssStyle.cleanIcon} alt=""/>
                    </div>
                </button>
            </div>
        </div>
    )

    function getCssStyle() {
        return {
            fontName: isDarkMode ? utilities.fontNameDarkMode : utilities.fontName,
            cleanIcon: isDarkMode ? GlobalConst.sourceImages.cleanIconWhite : GlobalConst.sourceImages.cleanIcon,
            styleTags: isDarkMode ? style.styleTagsDarkMode : style.styleTags,
            fontSubTitle: isDarkMode ? utilities.fontSubTitleDarkMode : utilities.fontSubTitle,
            borderBottom: isDarkMode ? style.borderBottomDarkMode : style.borderBottom,
            borderLeft: isDarkMode ? style.borderLeftDarkMode : style.borderLeft,
            bg: isDarkMode ? utilities.bgDarkModeInfo : utilities.bgNormalInfo
        }
    }
}