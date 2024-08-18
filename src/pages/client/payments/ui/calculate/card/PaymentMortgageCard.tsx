import { Button, Flex, Image, Typography } from "antd";
import "./PaymentMortgageCard.scss";

const { Text, Title } = Typography;

export const PaymentMortgageCard = () => {
    return (
        <Flex className="payment-mortgage-card" justify="space-between" align="center">
            <Flex align="center" gap={20}>
                <Flex className="payment-mortgage-card-image" justify="center" align="center">
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Nq-Szpwqfn3ArXzpJ33gUMXGQ5WlSl3vCQ&s" preview={false} />
                </Flex>
                <Flex vertical>
                    <Text>Халык банк</Text>
                    <Title level={5}>Ипотека от Халык</Title>
                </Flex>
            </Flex>
            <Flex vertical>
                <Text>Платеж</Text>
                <Title level={5}>от 125 640 ₸</Title>
            </Flex>
            <Text style={{ fontSize: 12, lineHeight: 1.33, maxWidth: 231 }}>
                Комиссии: 5000 тг - рассмотрение, 1% - организация (макс. 100000 тг), 5000тг (0.5%) -выдача, 0.2% - страхование
            </Text>
            <Flex vertical>
                <Text>Ставка</Text>
                <Title level={5}>10%</Title>
            </Flex>
            <Flex vertical>
                <Text>Срок</Text>
                <Title level={5}>до 20 лет</Title>
            </Flex>
            <Button>Подать заявку</Button>
        </Flex>
    );
};
