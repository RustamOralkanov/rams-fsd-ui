import React from "react";
import { Flex, Tag, Image, Typography } from "antd";
import { FavoriteIcon } from "../../../../../shared/icons";
import { flatInfoStyle } from "../../../config/flat.config";
import "./FlatCard.scss";

const { Title, Text } = Typography;

export const FlatCard: React.FC = () => {
    return (
        <Flex vertical className="flat-card" gap={10}>
            <Image
                src={"https://ramsqz.com/storage/flats/main/952d89ee95863853e5036a244ba277dc.jpg"}
                preview={false}
                height={144}
                width={"100%"}
                style={{ objectFit: "contain" }}
            />
            <Flex justify="space-between" align="center">
                <Flex align="center" gap={5}>
                    <Tag color="#024638">№ 115</Tag>
                    <Tag color="#024638">Grande Vie</Tag>
                </Flex>
                <FavoriteIcon />
            </Flex>
            <Flex vertical gap={15}>
                <Flex align="center" justify="space-between">
                    <Title level={5}>Блок 15</Title>
                    <Title level={5}>3-комнатная</Title>
                </Flex>
                <Flex vertical>
                    <Flex align="center" justify="space-between">
                        <Text style={flatInfoStyle}>Площадь</Text>
                        <Text style={flatInfoStyle}>104,5 м2</Text>
                    </Flex>
                    <Flex align="center" justify="space-between">
                        <Text style={flatInfoStyle}>Этаж</Text>
                        <Text style={flatInfoStyle}>5</Text>
                    </Flex>
                    <Flex align="center" justify="space-between">
                        <Text style={flatInfoStyle}>Сдача объекта</Text>
                        <Text style={flatInfoStyle}>2023 / 3 кв.</Text>
                    </Flex>
                </Flex>
                <Title level={4}>85 500 000 ₸</Title>
                <Flex vertical gap={5}>
                    <Flex align="center" justify="space-between">
                        <Text style={flatInfoStyle}>Цена за м2</Text>
                        <Text style={flatInfoStyle} strong>
                            3-комнатная
                        </Text>
                    </Flex>
                    <Flex align="center" justify="space-between">
                        <Text style={flatInfoStyle}>В рассрочку</Text>
                        <Text style={flatInfoStyle} strong>
                            3-комнатная
                        </Text>
                    </Flex>
                </Flex>
                <Flex align="center" gap={5}>
                    <Tag>С отделкой</Tag>
                    <Tag>Premium</Tag>
                    <Tag>+1</Tag>
                </Flex>
            </Flex>
        </Flex>
    );
};
