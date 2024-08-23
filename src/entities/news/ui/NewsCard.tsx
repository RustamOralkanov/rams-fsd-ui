import common from "@styles/common.module.scss";
import { Flex, Image, Typography } from "antd";
import { Colors } from "../../../shared/types/Colors";
import { CustomTag } from "../../../shared/ui";

const { Text, Title } = Typography;

export const NewsCard = () => {
    return (
        <Flex vertical gap={20}>
            <Flex className={common.relative}>
                <CustomTag text={"Новости"} type="default" className={common.absolute} style={{ zIndex: 2, left: 15, top: 15 }} />
                <Image
                    src={"https://ramsqz.com/storage/news/gallery/rf8xvwEScKJIz0RSZnMGu8UwRNBNonhHSaxcUG4U.jpg"}
                    preview={false}
                    width={"100%"}
                    height={254}
                    className={[common["radius-10"], common.cover].join(" ")}
                />
            </Flex>
            <Flex vertical gap={20}>
                <Title level={3} style={{ height: 60 }} ellipsis={{ rows: 2 }}>
                    Quisque efficitur suscipit velit nec dignissim
                </Title>
                <Text style={{ color: Colors.gray600, fontSize: 12 }}>16 сентября 2022</Text>
            </Flex>
        </Flex>
    );
};
