import common from "@styles/common.module.scss";
import { Carousel, Image } from "antd";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "@/app/constants/router";
import { useGetNewsDiscountsQuery } from "@/entities/news/api/news-discounts.api";
import { CustomTag } from "../../../shared/ui";
import "./DiscountsCarousel.scss";

export const DiscountsCarousel = () => {
    const { data } = useGetNewsDiscountsQuery();

    return (
        <div className={[common.relative, "discount-carousel", common["radius-10"], common.hidden].join(" ")} style={{ aspectRatio: "1 / 1" }}>
            <CustomTag text="Акции" style={{ top: 15, left: 15, zIndex: 2 }} className={common.absolute} />
            <Carousel draggable autoplay autoplaySpeed={5000} className="discount-carousel-carousel">
                {data?.items.map((item, index) => {
                    if (item.type === "discount")
                        return (
                            <div key={index}>
                                <Link to={`/${APP_ROUTES.NEWS}/${item.id}`} state={{ type: item.type }}>
                                    <Image
                                        src={item.coverImg}
                                        preview={false}
                                        className={[common.cover, common["object-center"]].join(" ")}
                                        width={"100%"}
                                        height={"100%"}
                                        style={{ aspectRatio: "1 / 1" }}
                                    />
                                </Link>
                            </div>
                        );
                })}
            </Carousel>
        </div>
    );
};
