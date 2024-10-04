import { Flex, Tag, Typography } from "antd";
import { FavoriteButton } from "@/features/favorite";
import { PartialFlatsItem } from "@/features/flats/model/types/flats.model";
import { Colors } from "@/shared/types/Colors";
import { ChevronDownIcon, ParkingIcon } from "../../../../shared/icons";
import "./ParkingCard.scss";

const { Text, Title } = Typography;

export const ParkingCard: React.FC<PartialFlatsItem> = (props) => {
    return (
        <Flex justify="space-between" align="center" className="parking-card ">
            <ParkingIcon />
            <Flex vertical gap={5} className="parking-card-tags">
                <Tag color="#024638" className="width-fit">
                    № {props.number}
                </Tag>
            </Flex>
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
                <FavoriteButton {...props} />
                <ChevronDownIcon style={{ transform: "rotate(-90deg)", color: Colors.gray500 }} />
            </Flex>
        </Flex>
    );
};
