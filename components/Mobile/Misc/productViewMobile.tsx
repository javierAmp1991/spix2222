import style from "/styles/Mobile/Misc/productView.module.css"
import utilities from "/styles/utilities.module.css"
import {Product} from "../../../dataDemo/data";
import {GlobalConst} from "../../../public/globalConst";
import Image from "next/image";

export default function ProductViewMobile({item, size, isDisplayOffer}:
                                              { item: Product, size: number, isDisplayOffer: boolean }) {
    let isOffer: boolean = true
    let getSizeProduct = getProductSize()
    return (
        <div className={style.boxShadowPro} style={getSizeProduct.widthContainer}>
            <div style={getSizeProduct.sizeImage} className={style.aspectRatio}>
                <div className={style.aspectImage}>
                    <Image layout={"fill"} objectFit={"cover"} loading="lazy" src={item.ImagePath} alt=""/>
                </div>
            </div>

            <div className={utilities.positionLastTicket}>
                <Image layout={"fill"} src={GlobalConst.sourceImages.inOfferBanner} alt=""/>
            </div>

            <div className={style.gridInfoProduct}>
                <div className={`${utilities.fontPrimaryText} ${utilities.clamp2}`}>
                    {item.Name}
                </div>
                <div className={`${utilities.fontPriceInclude}`}>
                    ${getMoneyValue(item.Price)}
                </div>

                {
                    isDisplayOffer &&
                    <div className={`${utilities.fontSecundaryText}`}>
                        {
                            item.Include != null ?
                                <>
                                    {item.Include}
                                </>
                                :
                                <>
                                    <span>Antes: </span>
                                    <span className="line-through">
                                    ${getMoneyValue((item.Price * item.DiscountPercent / 100) + item.Price)}
                                </span>
                                </>
                        }
                    </div>
                }

            </div>
        </div>
    )

    function getMoneyValue(num: number): string {
        return Intl.NumberFormat("ES-CL").format(Math.round(num))
    }

    function getProductSize() {
        return {
            widthContainer: size != null? {width: size} : {},
            sizeImage: size != null ? {height: (size - 10), width: (size - 10)} : {}
        }
    }
}