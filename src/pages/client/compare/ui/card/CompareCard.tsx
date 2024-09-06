import { Flex, Image, Typography } from "antd";
import "./CompareCard.scss";
import { ChevronDownIcon } from "@/shared/icons";

const { Title, Text } = Typography;

export const CompareCard = () => {
    return (
        <Flex vertical className="compare-card">
            <Flex vertical align="center" className="compare-card-head">
                <Title level={4}>3-комн, 120,5 м2</Title>
                <Text>RAMS Signature</Text>
            </Flex>
            <Text className="text-center color-info-500 cursor-pointer">Купить</Text>
            <Image src="https://ramsqz.com/storage/flats/main/48ea91fb3e00002212c80f9ae7b46b59.png" preview={false} height={160} className="object-contain compare-card-image" />
            <Flex vertical className="compare-card-item">
                <Text className="color-gray-500">В ипотеку</Text>
                <Text>от 450 000 ₸</Text>
            </Flex>
            <Flex vertical className="compare-card-item">
                <Text className="color-gray-500">В рассрочку</Text>
                <Text>от 725 420 ₸</Text>
            </Flex>
            <Flex vertical className="compare-card-item">
                <Text className="color-gray-500">Отделка</Text>
                <Text>Чистовая</Text>
            </Flex>
            <Flex align="center" justify="space-between" className="compare-card-item location">
                <Text className="color-gray-500">Расположение</Text>
                <ChevronDownIcon />
            </Flex>
            <Flex vertical className="compare-card-item">
                <Text className="color-gray-500">Блок</Text>
                <Text>12</Text>
            </Flex>
            <Flex vertical className="compare-card-item">
                <Text className="color-gray-500">Этаж</Text>
                <Text>9</Text>
            </Flex>
            <Flex vertical className="compare-card-item">
                <Text className="color-gray-500">Номер</Text>
                <Text>115</Text>
            </Flex>
        </Flex>
    );
};
