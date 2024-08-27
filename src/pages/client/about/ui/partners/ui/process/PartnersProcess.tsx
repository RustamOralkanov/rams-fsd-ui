import PartnersProcessImage from "@assets/images/partners/partners-process.webp";
import { Col, Row, Image, Typography, Flex } from "antd";
import { Container } from "@/shared/ui";
import { partnersProcesses } from "../../model/partners.data";
import "./PartnersProcess.scss";

const { Title } = Typography;

export const PartnersProcess = () => {
    return (
        <section className="partners-process">
            <Container>
                <Row gutter={[40, 40]}>
                    <Col xl={14}>
                        <Image src={PartnersProcessImage} preview={false} className="border-radius-m" />
                    </Col>
                    <Col xl={10}>
                        <Flex vertical gap={40}>
                            <Title level={2}>Этапы работы с клиентами от агентства недвижимости</Title>
                            <Flex vertical gap={20}>
                                {partnersProcesses.map((process, index) => (
                                    <Flex key={index} className="partners-process-item" align="center" justify="space-between">
                                        <Title level={5} className="color-green-300">
                                            {process.stage}
                                        </Title>
                                        <div className="partners-process-item-divider" />
                                        <Title level={5} className="partners-process-item-desc">
                                            {process.description}
                                        </Title>
                                    </Flex>
                                ))}
                            </Flex>
                        </Flex>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
