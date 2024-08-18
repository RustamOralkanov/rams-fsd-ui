import common from "@styles/common.module.scss";
import { Carousel, Image } from "antd";
import { CustomTag } from "../../../shared/ui";
import "./DiscountsCarousel.scss";

export const DiscountsCarousel = () => {
    return (
        <div className={[common.relative, "discount-carousel", common["radius-10"], common.hidden].join(" ")} style={{ aspectRatio: "1 / 1" }}>
            <CustomTag text="Акции" style={{ top: 15, left: 15, zIndex: 2 }} className={common.absolute} />
            <Carousel draggable autoplay autoplaySpeed={5000} className="discount-carousel-carousel">
                {[...Array(3)].map((_, index) => (
                    <div key={index}>
                        <Image
                            src="https://ramsqz.com/storage/discont/StDrj8k8l7qHdt6GNiRCaQYwodrEkmtoplQcPvke.jpg"
                            preview={false}
                            className={[common.cover, common["object-center"]].join(" ")}
                            width={"100%"}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};
