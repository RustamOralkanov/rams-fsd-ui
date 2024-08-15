import { Flex, Typography } from "antd";
import { Colors } from "../../../../../shared/types/Colors";

const { Text, Title } = Typography;

export const FlatInfo = () => {
    return (
        <Flex vertical gap={10}>
            <Flex vertical>
                <Title level={3}>3-комнатная, 104,5 м2</Title>
                <Title level={3} style={{ color: Colors.green }}>
                    85 500 000 ₸
                </Title>
                <Text style={{ color: Colors.gray500 }}>560 617 ₸ за м2</Text>
            </Flex>
            <Flex vertical>
                <Flex align="center" justify="space-between">
                    <Text style={{ color: Colors.gray500 }}>Блок</Text>
                    <Text strong>12</Text>
                </Flex>
                <Flex align="center" justify="space-between">
                    <Text style={{ color: Colors.gray500 }}>Этаж</Text>
                    <Text strong>4</Text>
                </Flex>
                <Flex align="center" justify="space-between">
                    <Text style={{ color: Colors.gray500 }}>№</Text>
                    <Text strong>13</Text>
                </Flex>
                <Flex align="center" justify="space-between">
                    <Text style={{ color: Colors.gray500 }}>Сдача объекта</Text>
                    <Text strong>2023 / 3 квартал</Text>
                </Flex>
            </Flex>
        </Flex>
    );
};
