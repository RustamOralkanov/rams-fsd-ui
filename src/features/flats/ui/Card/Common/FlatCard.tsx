import { Flex, Tag, Image, Typography } from "antd";
import { FavoriteButton } from "@/features/favorite";
import { PartialFlatsItem } from "@/features/flats/model/types/flats.model";
import { flatInfoStyle } from "../../../config/flat.config";
import "./FlatCard.scss";

const { Title, Text } = Typography;

export const FlatCard: React.FC<PartialFlatsItem> = (props) => {
    return (
        <Flex vertical className="flat-card" gap={10}>
            <Image src={props.plan_photo} preview={false} height={144} width={"100%"} style={{ objectFit: "contain" }} />
            <Flex justify="space-between" align="center">
                <Flex align="center" gap={5}>
                    <Tag color="#024638">№ {props.number}</Tag>
                    <Tag color="#024638">{props.complex_name}</Tag>
                </Flex>
                <FavoriteButton {...props} />
            </Flex>
            <Flex vertical gap={15}>
                <Flex align="center" justify="space-between">
                    <Title level={5}>Блок {props.build_name}</Title>
                    <Title level={5}>{props.rooms}-комнатная</Title>
                </Flex>
                <Flex vertical>
                    <Flex align="center" justify="space-between">
                        <Text style={flatInfoStyle}>Площадь</Text>
                        <Text style={flatInfoStyle}>
                            {props.size} м<sup>2</sup>
                        </Text>
                    </Flex>
                    <Flex align="center" justify="space-between">
                        <Text style={flatInfoStyle}>Этаж</Text>
                        <Text style={flatInfoStyle}>{props.floor}</Text>
                    </Flex>
                    <Flex align="center" justify="space-between">
                        <Text style={flatInfoStyle}>Сдача объекта</Text>
                        <Text style={flatInfoStyle}>
                            {props.year_build} / {props.quarter} кв.
                        </Text>
                    </Flex>
                </Flex>
                <Title level={4}>{props.price?.toLocaleString()} ₸</Title>
                <Flex vertical gap={5}>
                    <Flex align="center" justify="space-between">
                        <Text style={flatInfoStyle}>
                            Цена за м<sup>2</sup>
                        </Text>
                        {props.price && props.size && (
                            <Text style={flatInfoStyle} strong>
                                {pricePerMetr(props.price, props.size)} ₸
                            </Text>
                        )}
                    </Flex>
                    <Flex align="center" justify="space-between">
                        <Text style={flatInfoStyle}>В рассрочку</Text>
                        <Text style={flatInfoStyle} strong>
                            n/d
                        </Text>
                    </Flex>
                </Flex>
                <Flex align="center" gap={5}>
                    <Tag>{props.property_facing}</Tag>
                    <Tag>{props.complex_class}</Tag>
                </Flex>
            </Flex>
        </Flex>
    );
};

const pricePerMetr = (price: number, size: number) => {
    const newPrice = (price / size).toFixed(0);

    return Number(newPrice).toLocaleString();
};
