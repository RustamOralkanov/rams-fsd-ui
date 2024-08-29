import { Flex, Image, Tag, Typography } from "antd";
import { DotsIcon, FavoriteIcon } from "@/shared/icons";
import { Colors } from "@/shared/types/Colors";
import "./FlatCardLarge.scss";

const { Text, Title } = Typography;

export const FlatCardLarge: React.FC = () => {
    return (
        <Flex className="flat-card-large" align="center" justify="space-between">
            <Image src="https://ramsqz.com/storage/flats/main/2c99c9fbece9c9ce719de21a309a1d81.png" preview={false} width={90} height={55} className="object-contain" />
            <Flex vertical gap={5}>
                <Tag color={Colors.green500} className="width-fit">
                    № 115
                </Tag>
                <Tag color={Colors.green500} className="width-fit">
                    Grande Vie
                </Tag>
            </Flex>
            <Flex vertical gap={5}>
                <Title level={5}>Блок 15</Title>
                <Title level={5}>3-комнатная</Title>
            </Flex>
            <Flex vertical gap={8}>
                <Text className="description-m color-gray-500">Площадь</Text>
                <Text className="description-m color-gray-900 font-weight-500">104,5 м2</Text>
            </Flex>
            <Flex vertical gap={8}>
                <Text className="description-m color-gray-500">Этаж</Text>
                <Text className="description-m color-gray-900 font-weight-500">99</Text>
            </Flex>
            <Flex vertical gap={8}>
                <Text className="description-m color-gray-500">Сдача объекта</Text>
                <Text className="description-m color-gray-900 font-weight-500">2023 / 3 кв.</Text>
            </Flex>
            <Flex vertical>
                <Title level={4}>85 500 000 ₸</Title>
                <Text className="description-m color-gray-500">
                    В рассрочку <span className="color-gray-900">2 560 617 ₸</span>
                </Text>
                <Text className="description-m color-gray-500">
                    Цена за м<sup>2</sup> <span className="color-gray-900">560 617 ₸</span>
                </Text>
            </Flex>
            <Flex wrap gap={5} style={{ maxWidth: 112 }}>
                <Tag color={Colors.gray} className="color-gray-900">
                    С отделкой
                </Tag>
                <Tag color={Colors.gray} className="color-gray-900">
                    Premium
                </Tag>
                <Tag color={Colors.gray} className="color-gray-900">
                    +1
                </Tag>
            </Flex>
            <Flex vertical gap={7}>
                <FavoriteIcon className="color-gray-300" />
                <DotsIcon className="color-gray-300" />
            </Flex>
        </Flex>
    );
};
