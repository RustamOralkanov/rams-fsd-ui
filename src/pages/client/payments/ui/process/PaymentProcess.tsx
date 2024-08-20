import { Carousel, Flex, Typography } from "antd";
import { Container } from "../../../../../shared/ui";
import "./PaymentProcess.scss";

const { Text, Title } = Typography;

export const PaymentProcess = () => {
    return (
        <section className="payment-process">
            <Container>
                <Flex vertical gap={40}>
                    <Title>Процесс</Title>
                    <div className="payment-process-carousel">
                        <Carousel draggable variableWidth touchThreshold={10} dots={false}>
                            {[...Array(7)].map((_, index) => (
                                <div key={index}>
                                    <Flex vertical className="payment-process-item" justify="space-between">
                                        <Title level={1} className="color-green-300">
                                            0{index + 1}
                                        </Title>
                                        <Text className="color-gray-500">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo consequatur eum recusandae est. Suscipit ad perferendis temporibus
                                            repellat id sunt expedita deleniti sit obcaecati, quaerat perspiciatis eaque minus reiciendis officiis!
                                        </Text>
                                    </Flex>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </Flex>
            </Container>
        </section>
    );
};
