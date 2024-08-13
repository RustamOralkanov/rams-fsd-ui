import { Col, Flex, Row, Typography, Image } from "antd";
import { Container } from "../../../../shared/ui/container";
import { ConsultationForm } from "../form/ConsultationForm";
import { Colors } from "../../../../shared/types/Colors";
import ConsultationImage from "../../../../app/assets/images/consultation.webp";
import common from "../../../../shared/styles/common.module.scss";
import "./Consultation.scss";

const { Title, Text } = Typography;

export const Consultation = () => {
    return (
        <section>
            <Container>
                <Row className="consultation">
                    <Col xxl={8} xl={8}>
                        <Flex vertical gap={10}>
                            <Title level={2} style={{ color: Colors.white }}>
                                Индивидуальная консультация
                            </Title>
                            <Text style={{ color: Colors.white }}>
                                Наши специалисты подберут для Вас самые <br /> лучшие условия приобретения квартиры <br /> всего за 10 минут
                            </Text>
                        </Flex>
                    </Col>
                    <Col xxl={{ span: 6, offset: 1 }} xl={{ span: 6, offset: 2 }}>
                        <ConsultationForm />
                    </Col>
                    <div className="consultation-image">
                        <Image src={ConsultationImage} preview={false} height={"100%"} className={common.cover} />
                    </div>
                </Row>
            </Container>
        </section>
    );
};
