import { Button, Flex, Image, Typography } from "antd";
import { Colors } from "../../../types/Colors";
import { IBanner } from "../model/banner.model";

const { Title } = Typography;

export const Banner: React.FC<IBanner> = ({ is_button = true, is_text = true }) => {
    return (
        <Flex className="payment-banner" align="center">
            <Flex className="payment-banner-image">
                <Image
                    src={"https://ramsqz.com/storage/pages/mortgages/main_banner_9da4ef66a0a0969ae0fb737a46c46075.png"}
                    preview={false}
                    height={"100%"}
                    width={"100%"}
                    className="object-cover"
                />
            </Flex>
            <Flex vertical className="payment-banner-wrapper" gap={30}>
                {is_text && (
                    <Title level={1} style={{ color: Colors.white }}>
                        Максимально выгодные программы ипотеки
                    </Title>
                )}
                {is_button && (
                    <Button type="primary" style={{ width: "fit-content" }}>
                        Оставить заявку
                    </Button>
                )}
            </Flex>
        </Flex>
    );
};
