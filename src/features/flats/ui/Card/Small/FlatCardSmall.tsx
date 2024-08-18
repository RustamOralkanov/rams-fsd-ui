import { Flex, Image, Tag, Typography } from "antd";
import { flatInfoStyle } from "../../../config/flat.config";
import "./FlatCardSmall.scss";

const { Title, Text } = Typography;

export const FlatCardSmall: React.FC = () => {
    return (
        <Flex align="center" justify="space-between" className="flat-card-small">
            <Image src="https://ramsqz.com/storage/flats/main/952d89ee95863853e5036a244ba277dc.jpg" preview={false} width={110} height={73} style={{ objectFit: "contain" }} />
            <Flex vertical gap={5} align="flex-end">
                <Title level={4}>85 500 000 ₸</Title>
                <Flex align="center" gap={20}>
                    <Text style={flatInfoStyle}>3-комнатная</Text>
                    <Text style={flatInfoStyle}>104,5 м2</Text>
                </Flex>
                <Flex align="center" gap={5}>
                    <Tag color="#024638">№ 115</Tag>
                    <Tag color="#024638">Grande Vie</Tag>
                </Flex>
            </Flex>
        </Flex>
    );
};
