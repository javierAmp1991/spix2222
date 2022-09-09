import Image from "next/image";
import style from "/styles/Mobile/Search/resaleEventMobile.module.css";
import {ResaleProduct} from "../../../dataDemo/data";
import utilities from "/styles/utilities.module.css";
import Link from "next/link";
import {useState} from "react";
import PopUpContainerMob from "../Misc/popUpContainerMob";

export default function ResaleEventDesktop({item}: { item: ResaleProduct }) {

    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }

    let [displaPopUp, setDisplayPopUp] = useState(false)
    const handlePopUp = () => {
        setDisplayPopUp(displaPopUp = !displaPopUp)
    }
    const cssStyle = getCssStyle()

    return (
        <div className={style.gridNewPa}>
            <div className={cssStyle.gridType}>
                <div>
                    <div className={utilities.fontName}>
                        Pack de {item.ListProducts.length} productos
                    </div>
                    <div className={style.divImageInfo}>
                        <div className={style.gridImageInfo}>
                            <div className={style.profileSize}>
                                <Image layout={"fill"} objectFit={"cover"} src={item.ProfileImage} alt={""}/>
                            </div>
                            <div className={`${style.overflowName} ${utilities.fontPrimaryText}`}>
                                {item.Name}
                            </div>
                        </div>
                    </div>

                    {/*<button onClick={handlePopUp} className={utilities.fontSecundaryText}>
                        Ver productos
                    </button>*/}
                </div>

                <div className={"relative w-full"}>
                    <button onClick={handlePopUp} className={`${utilities.fontSecundaryText} ${style.positionSeeMore}`}>
                        Ver mas
                    </button>
                    <div className={`${utilities.fontSecundaryText} ${style.gridProducts}`}>
                        {
                            item.ListProducts.map((product, index) =>
                                <div key={index} className={style.mainDivProd}>
                                    <div className={style.gridPriceName}>
                                        <div className={style.sizeImage}>
                                            <Image priority={true} layout={"fill"} src={"/images/product1.jpg"}
                                                   alt={""}/>
                                        </div>
                                        <div>{product.Name} X {product.Amount}</div>
                                        <span
                                            className={utilities.fontPriceInclude}>${getMoneyValue(product.Price)}</span>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>

                {/*<div className={style.divImageInfo}>
                    <div className={style.gridImageInfo}>
                        <div className={style.profileSize}>
                            <Image layout={"fill"} objectFit={"cover"} src={item.ProfileImage} alt={""}/>
                        </div>
                        <div className={`${style.overflowName} ${utilities.fontPrimaryText}`}>
                            {item.Name}
                        </div>
                    </div>
                </div>*/}
            </div>

            <Link href={""}>
                <a className={`${utilities.fontSecundaryText} ${style.rightDiv} ${cssStyle.borderType}`}>
                    <div className={style.gridTotal}>
                        <div className={cssStyle.colorEti}>
                            <span className={style.dicountPer}>
                                - 25%
                            </span>
                        </div>

                        <div className={style.divTotal}>
                            <div className={`${utilities.font12} ${utilities.gridMaxContent2} gap-2 mb-2`}>
                                {
                                    item.PreviousPrice > item.Price ?
                                        <span><Image width={14} height={10} src={"/images/dollarDown.png"}
                                                     alt={""}/> </span>
                                        :
                                        <span><Image width={14} height={10} src={"/images/dollarUp.png"}
                                                     alt={""}/> </span>
                                }
                                <div>
                                    <span>Antes: </span>
                                    <span className="line-through">{getMoneyValue((item.PreviousPrice))}</span>
                                </div>
                            </div>

                            <div className={`${utilities.gridMaxContent2} gap-1`}>
                                <div className={style.sizeDiscount}>
                                    {
                                        item.PreviousPrice > item.Price ?
                                            <Image layout={"fill"} src={"/images/discountIcon.png"} alt={""}/>
                                            :
                                            <Image layout={"fill"} src={"/images/discountIconGreen.png"} alt={""}/>
                                    }
                                </div>
                                <span className={utilities.fontPriceInclude}>Total: {getMoneyValue(item.Price)}</span>
                            </div>
                        </div>

                        <button className={style.styleButton}>
                            Comprar
                        </button>
                    </div>
                </a>

            </Link>

            {
                displaPopUp &&
                <PopUpContainerMob isButtonVisible={true} isBackground={true} closePopUp={handlePopUp}>
                    <div className={style.mainDivPopUp}>
                        <div className={`${utilities.fontName} mb-5`}>
                            Pack de {item.ListProducts.length} productos
                        </div>

                        <div className={`${utilities.fontSecundaryText} ${style.gridProductsPop}`}>
                            {
                                item.ListProducts.map((product, index) =>
                                    <div key={index} className={style.mainDivProdPop}>
                                        <div className={style.sizeImagePop}>
                                            <Image priority={true} layout={"fill"} src={"/images/product1.jpg"}
                                                   alt={""}/>
                                        </div>
                                        <div className={style.gridPriceNamePop}>
                                            <div>{product.Name} X {product.Amount}</div>
                                            <div className={`${utilities.font12} ${utilities.gridMaxContent2} gap-2 mb-2`}>
                                                {
                                                    item.PreviousPrice > item.Price ?
                                                        <span><Image width={14} height={10} src={"/images/dollarDown.png"}
                                                                     alt={""}/> </span>
                                                        :
                                                        <span><Image width={14} height={10} src={"/images/dollarUp.png"}
                                                                     alt={""}/> </span>
                                                }
                                                <div>
                                                    <span>Antes: </span>
                                                    <span className="line-through">{getMoneyValue((item.PreviousPrice))}</span>
                                                </div>
                                            </div>

                                            <div className={`${utilities.gridMaxContent2} gap-1`}>
                                                <div className={style.sizeDiscount}>
                                                    {
                                                        item.PreviousPrice > item.Price ?
                                                            <Image layout={"fill"} src={"/images/discountIcon.png"} alt={""}/>
                                                            :
                                                            <Image layout={"fill"} src={"/images/discountIconGreen.png"} alt={""}/>
                                                    }
                                                </div>
                                                <span className={utilities.fontPriceInclude}>Total: {getMoneyValue(item.Price)}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </PopUpContainerMob>
            }
        </div>
    )

    function getCssStyle() {
        return {
            gridType: item.PreviousPrice > item.Price ? style.leftDivRed : style.leftDivGreen,
            borderType: item.PreviousPrice > item.Price ? style.borderRightDivRed : style.borderRightDivGreen,
            colorEti: item.PreviousPrice > item.Price ? style.etiquetaRed : style.etiquetaGreen,
        }
    }
}