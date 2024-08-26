import { Col, Flex, Row, Typography } from "antd";
import { MailIcon, PhoneIcon } from "@/shared/icons";

const { Title, Text } = Typography;

export const ContactsPr = () => {
    return (
        <Row gutter={[24, 24]}>
            {[...Array(4)].map((_, index) => (
                <Col xl={6} key={index}>
                    <Flex vertical gap={20}>
                        <Flex vertical gap={5}>
                            <Title level={4}>Ануарбек Жандосов</Title>
                            <Text className="color-gray-500">PR директор</Text>
                        </Flex>
                        <Flex vertical gap={12}>
                            <a href="tel: +7 771 506-3549" className="link-button">
                                <PhoneIcon />
                                +7 771 506-3549
                            </a>
                            <a href="mailto: hr@ramsqz.com" className="link-button">
                                <MailIcon /> hr@ramsqz.com
                            </a>
                        </Flex>
                    </Flex>
                </Col>
            ))}
        </Row>
    );
};
