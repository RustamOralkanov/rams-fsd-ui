import { Flex, Image, Typography } from "antd";
import { Colors } from "../../../../../shared/types/Colors";
import { IPaymentsFeaturesCard } from "../../model/payments.model";

const { Title, Text } = Typography;

export const PaymentFeaturesCard: React.FC<IPaymentsFeaturesCard> = ({ height = 414 }) => {
    return (
        <Flex vertical style={{ height: height, backgroundColor: Colors.gray, padding: 40, borderRadius: 10 }} justify="space-between">
            <Flex justify="center" align="center" style={{ backgroundColor: Colors.white, width: 50, height: 50, borderRadius: 50 }}>
                <Image src="https://ramsqz.com/storage/pages/mortgages/advantage_image_3_ee99ff08d8b6b5d04288ae66bdf90ce6.svg" preview={false} width={24} height={24} />
            </Flex>
            <Flex vertical gap={5}>
                <Title level={3} ellipsis={{ rows: 2 }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero perspiciatis cumque optio, esse eos voluptatem a quod sequi temporibus modi vitae laborum
                    harum! Nihil natus maiores dolorem repellat similique!
                </Title>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In quia voluptatibus quam voluptas rem et libero, sequi aliquid velit odit delectus sed explicabo porro
                    aliquam labore iste cupiditate fuga amet.
                </Text>
            </Flex>
        </Flex>
    );
};
