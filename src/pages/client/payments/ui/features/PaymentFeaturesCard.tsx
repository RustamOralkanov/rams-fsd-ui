import { Flex, Image, Typography } from "antd";
import { Colors } from "../../../../../shared/types/Colors";
import { IPaymentsFeaturesCard } from "../../model/payments.model";

const { Title, Text } = Typography;

export const PaymentFeaturesCard: React.FC<IPaymentsFeaturesCard> = (props) => {
    return (
        <Flex vertical style={{ height: props.height, backgroundColor: Colors.gray, padding: 40, borderRadius: 10 }} justify="space-between">
            <Flex justify="center" align="center" style={{ backgroundColor: Colors.white, width: 50, height: 50, borderRadius: 50 }}>
                <Image src={props.icon} preview={false} width={24} height={24} />
            </Flex>
            <Flex vertical gap={5}>
                <Title level={3} ellipsis={{ rows: 2 }}>
                    {props.title}
                </Title>
                {props.description && <Text>{props.description}</Text>}
            </Flex>
        </Flex>
    );
};
