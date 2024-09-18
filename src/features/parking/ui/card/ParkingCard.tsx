import { Flex, Tag, Typography } from "antd";
import { PartialFlatsItem } from "@/features/flats/model/types/flats.model";
import { ChevronDownIcon, FavoriteIcon, ParkingIcon } from "../../../../shared/icons";
import { Colors } from "../../../../shared/types/Colors";
import "./ParkingCard.scss";

const { Text, Title } = Typography;

export const ParkingCard: React.FC<PartialFlatsItem> = (props) => {
    return (
        <Flex gap={40} align="center" className="parking-card ">
            <ParkingIcon />
            <Tag color="#024638">№ {props.number}</Tag>
            <Flex vertical justify="center" className="parking-card-shrink">
                <Text style={{ color: Colors.gray500, fontSize: 12, lineHeight: 1.3 }}>Стоимость</Text>
                <Title level={5}>{props.price?.toLocaleString()} ₸</Title>
            </Flex>
            <Flex vertical justify="center" className="parking-card-shrink">
                <Text style={{ color: Colors.gray500, fontSize: 12, lineHeight: 1.3 }}>
                    Цена за м<sup>2</sup>
                </Text>
                {props.price && props.size && <Title level={5}>{Number((props.price / props.size).toFixed(0)).toLocaleString()} ₸</Title>}
            </Flex>
            <Flex vertical justify="center" className="parking-card-shrink">
                <Text style={{ color: Colors.gray500, fontSize: 12, lineHeight: 1.3 }}>Площадь</Text>
                <Title level={5}>{props.size} м2</Title>
            </Flex>
            <Flex vertical justify="center" className="parking-card-shrink">
                <Text style={{ color: Colors.gray500, fontSize: 12, lineHeight: 1.3 }}>Блок</Text>
                <Title level={5}>{props.build_name}</Title>
            </Flex>
            <Flex align="center" gap={10}>
                <FavoriteIcon style={{ color: Colors.gray500 }} />
                <ChevronDownIcon style={{ transform: "rotate(-90deg)", color: Colors.gray500 }} />
            </Flex>
        </Flex>
    );
};
