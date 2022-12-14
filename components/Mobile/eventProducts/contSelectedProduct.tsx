import style from "/styles/Mobile/eventProducts/contSelectedProduct.module.css"
import {Product} from "../../../dataDemo/data";
import utilities from "/styles/utilities.module.css"
import {GlobalConst} from "../../../public/globalConst";
import React, {useEffect, useState} from "react";
import {Guest} from "../../../pages/eventProducts";
import ProductSelectedViewDesk from "./productSelectedViewDesk";
import Image from "next/image";
import Link from "next/link";

const productTitle = "Productos"
const buttonText = "Comprar"

export default function ContSelectedProduct({
                                                methodProps, listGuest,
                                                guestSelected,
                                                removeItem,
                                                amountPerItem, isOpen
                                            }:
                                                {
                                                    methodProps: any,
                                                    listGuest: Guest[],
                                                    guestSelected: Guest,
                                                    removeItem: any,
                                                    amountPerItem: any,
                                                    isOpen: boolean
                                                }) {

    let [dispay, setDisplay] = useState(false)
    const handleDisplay = () => setDisplay(dispay = !dispay)
    const totalPrice = getTotalPrice()
    let totalProducts: number = getTotalProducts()
    const cssStyle = getCssStyle()
    const cssStyleCar = getStyleBuyCar()
    useEffect(() => {
        if (isOpen) {
        } else {
            setDisplay(dispay = false)
        }
    }, [cssStyle])
    return (
        <div className={cssStyle}>
            <div className="overflow-scroll">
                <div className={style.gridTabs}>
                    <div className={` ${style.containerClients}`}>
                        {
                            listGuest.map((item, index) =>
                                <div onClick={() => methodProps.guestSelected(item)}
                                     className={item.isSelected ? style.TabIconSelected : style.TabIcon}
                                     key={index}>
                                <span className={`${style.nameElipsis} ${utilities.clamp1}`}>
                                {item.name}
                                </span>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className={`${utilities.fontSubTitle} ${style.contTitle}`}>
                    {
                        totalProducts > 0 ?
                            <span>{productTitle} ({totalProducts})</span> :
                            <span>No hay productos</span>
                    }
                </div>
                <div className={style.gridSelectedProduct}>
                    {
                        guestSelected.listProductAmount.map((item, index) =>
                            <ProductSelectedViewDesk key={index}
                                                     deleteItem={removeItem}
                                                     item={item}
                                                     amountPerItem={amountPerItem}/>
                        )
                    }
                </div>
            </div>

            <div className={cssStyleCar}>
                <div className={style.gridCarTitle}>
                    {
                        dispay ?
                            <div onClick={handleDisplay}
                                 className="h-4 w-4 relative">
                                <Image layout={"fill"}

                                       src={GlobalConst.sourceImages.leftArrowExitBlack} alt=""/>
                            </div>
                            :
                            <div onClick={handleDisplay}
                                 className={style.styleGridVar}>
                                <div className={style.sizeBuyCAr}>
                                    <Image layout={"fill"}
                                           src={GlobalConst.sourceImages.buyCarNormal} alt=""/>
                                </div>
                                <span className={style.numItemSelected}>
                                    {
                                        totalProducts > 9 ?
                                            <div className="relative">
                                                <span className={style.positionNine}>9</span>
                                                <span className={style.positionMore}>+</span>
                                            </div>
                                            :
                                            totalProducts
                                    }
                                </span>
                            </div>
                    }

                    <div className={`${utilities.fontSubTitle} ${style.totalConainer}`}>
                        Total: ${Intl.NumberFormat("ES-CL"
                    ).format(Math.round(totalPrice))}
                    </div>
                    <Link href={"/payPage"}>
                        <button className={style.buttonStyle}>{buttonText}</button>
                    </Link>
                </div>
            </div>
        </div>
    )

    function getStyleBuyCar() {
        if (isOpen) {
            return style.totalButtonContainerOpen
        } else {
            return style.totalButtonContainer
        }
    }

    function getCssStyle() {
        if (isOpen) {
            if (dispay) {
                return style.contVarNormal
            } else {
                return style.contVar
            }
        } else {
            return style.contVarHidden
        }
        /*styleDiv: isOpen? (dispay ? style.contVarNormal : style.contVar) : style.contVarHidden*/
    }

    function getTotalProducts(): number {
        let total = 0;
        if (listGuest.length > 0) {
            listGuest.forEach(Guest => {
                total = total + Guest.listProductAmount.length
            })
        } else total = 0;
        return total;
    }

    function getTotalPrice(): number {
        let total = 0;
        if (listGuest.length > 0) {
            listGuest.forEach((Guest) => {
                Guest.listProductAmount.forEach(item => {
                    total = total + (item.Amount * item.Product.Price);
                })
            })
        } else total = 0;
        return total;
    }

}