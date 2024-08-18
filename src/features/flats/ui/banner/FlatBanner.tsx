import common from "@styles/common.module.scss";
import { Flex, Image, Typography } from "antd";
import { Colors } from "../../../../shared/types/Colors";
import { CustomTag } from "../../../../shared/ui";
import "./FlatBanner.scss";

const { Title } = Typography;

export const FlatBanner = () => {
    return (
        <Flex vertical className="flat-banner">
            <Flex className="flat-banner-image">
                <Image
                    src="https://ramsqz.com/storage/complexes/gallery/9cU9Gg9viarPmjig8mYhn2C7n1Sw7B39aOTQW56c.jpg"
                    preview={false}
                    className={[common["object-center"], common.cover].join(" ")}
                    height={"100%"}
                    width={"100%"}
                />
            </Flex>
            <Flex vertical gap={5} className="flat-banner-info">
                <Title level={3} style={{ color: Colors.white }}>
                    RAMS Garden
                </Title>
                <CustomTag text={"от 25 660 900 ₸ "} style={{ width: "fit-content" }} type="default" />
            </Flex>
        </Flex>
    );
};
