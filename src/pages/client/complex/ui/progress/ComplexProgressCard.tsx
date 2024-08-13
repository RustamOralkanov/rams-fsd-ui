import { Flex, Typography } from "antd";
import { CustomTag } from "../../../../../shared/ui";
import common from "../../../../../shared/styles/common.module.scss";
import { Colors } from "../../../../../shared/types/Colors";

const { Title } = Typography;

export const ComplexProgressCard = () => {
    return (
        <Flex
            vertical
            className={[common.relative, common["radius-12"], common.hidden, common["padding-20"]].join(" ")}
            style={{
                height: 400,
                backgroundImage: `url('https://ramsqz.com/images/progress.png?afabe2ab9e53a7d89c60a35483ccbfdb')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                userSelect: "none",
            }}
        >
            <Flex vertical justify="space-between" flex={1}>
                <Flex gap={5} align="center">
                    <CustomTag text={"Видео"} type="default" />
                    <CustomTag text={"6 фото"} type="default" />
                </Flex>
                <Title level={3} style={{ color: Colors.white, fontWeight: 400 }}>
                    Январь 2024
                </Title>
            </Flex>
        </Flex>
    );
};
