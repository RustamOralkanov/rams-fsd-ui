import { Flex, Tag, Typography } from "antd";
import { ChevronDownIcon, FavoriteIcon, LockIcon, StorageIcon } from "../../../../shared/icons";
import { Colors } from "../../../../shared/types/Colors";

const { Text, Title } = Typography;

export const StorageCard = () => {
    return (
        <Flex gap={40} align="center" className="parking-card ">
            <StorageIcon />
            <Tag color="#024638">№ 115</Tag>
            <Flex vertical justify="center" className="parking-card-shrink">
                <Text style={{ color: Colors.gray500, fontSize: 12, lineHeight: 1.3 }}>Стоимость</Text>
                <Title level={5}>4 540 000 ₸</Title>
            </Flex>
            <Flex vertical justify="center" className="parking-card-shrink">
                <Text style={{ color: Colors.gray500, fontSize: 12, lineHeight: 1.3 }}>Цена за м2</Text>
                <Title level={5}>540 000 ₸</Title>
            </Flex>
            <Flex vertical justify="center" className="parking-card-shrink">
                <Text style={{ color: Colors.gray500, fontSize: 12, lineHeight: 1.3 }}>Площадь</Text>
                <Title level={5}>13,2 м2</Title>
            </Flex>
            <Flex vertical justify="center" className="parking-card-shrink">
                <Text style={{ color: Colors.gray500, fontSize: 12, lineHeight: 1.3 }}>Блок</Text>
                <Title level={5}>12</Title>
            </Flex>
            <Flex align="center" gap={10}>
                <LockIcon style={{ color: Colors.statusError500 }} />
                <FavoriteIcon style={{ color: Colors.gray500 }} />
                <ChevronDownIcon style={{ transform: "rotate(-90deg)", color: Colors.gray500 }} />
            </Flex>
        </Flex>
    );
};
