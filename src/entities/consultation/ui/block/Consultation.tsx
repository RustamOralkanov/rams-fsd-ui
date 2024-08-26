import ConsultationImage from "@assets/images/consultation.webp";
import common from "@styles/common.module.scss";
import { Col, Flex, Row, Typography, Image } from "antd";
import { Colors } from "../../../../shared/types/Colors";
import { Container } from "../../../../shared/ui/container";
import { IConsultationProps } from "../../model/consultation.model";
import { ConsultationForm } from "../form/ConsultationForm";
import "./Consultation.scss";

const { Title, Text } = Typography;

export const Consultation: React.FC<IConsultationProps> = (props) => {
    return (
        <section>
            <Container>
                <Row className="consultation">
                    <Col xl={6}>
                        <Flex vertical gap={10}>
                            <Title level={2} style={{ color: Colors.white }}>
                                {props.title ? props.title : "Индивидуальная консультация"}
                            </Title>
                            <Text style={{ color: Colors.white }}>
                                {props.text ? props.text : "Наши специалисты подберут для Вас самые лучшие условия приобретения квартиры  всего за 10 минут"}
                            </Text>
                        </Flex>
                    </Col>
                    <Col xl={{ span: 6, offset: 3 }}>
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
