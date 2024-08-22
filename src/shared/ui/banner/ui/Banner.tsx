import { Flex, Image } from "antd";
import { IBanner } from "../model/banner.model";

export const Banner: React.FC<IBanner> = ({ children, src }) => {
    return (
        <Flex className="payment-banner" align="center">
            <Flex className="payment-banner-image">
                <Image
                    src={src ? src : "https://ramsqz.com/storage/pages/mortgages/main_banner_9da4ef66a0a0969ae0fb737a46c46075.png"}
                    preview={false}
                    height={"100%"}
                    width={"100%"}
                    className="object-cover"
                />
            </Flex>
            <Flex vertical className="payment-banner-wrapper" gap={30}>
                {children}
            </Flex>
        </Flex>
    );
};
