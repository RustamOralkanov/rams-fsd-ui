import { Flex, Typography } from "antd";
import { ForwardIcon } from "@/shared/icons";
import "./MediaCard.scss";

const { Paragraph, Text, Title } = Typography;

export const MediaCard = () => {
    return (
        <Flex vertical className="padding-30 border-gray-100 border-radius-m media-card" justify="space-between">
            <Flex vertical gap={10}>
                <Title level={4}>Разъяснение по ситуации водоснабжения жк «La Verde» в верхней части города Алматы</Title>
                <Paragraph ellipsis={{ rows: 4 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veritatis saepe praesentium tenetur consequuntur, tempora iusto! Nulla similique culpa quas
                    aliquid, repellendus, eligendi adipisci ea debitis earum architecto nisi et? Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugiat non soluta
                    ullam suscipit iste, similique officiis, neque sit facere repellendus magnam laudantium voluptates. Eum at incidunt sunt ipsa illum.
                </Paragraph>
            </Flex>

            <Flex align="center" justify="space-between">
                <Text className="color-gray-500 description-m">3 апреля 2024</Text>
                <ForwardIcon />
            </Flex>
        </Flex>
    );
};
