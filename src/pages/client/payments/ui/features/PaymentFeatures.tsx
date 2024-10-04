import { Col, Flex, Row, Typography } from "antd";
import { useLocation } from "react-router-dom";
import { APP_ROUTES } from "@/app/constants/router";
import { Container } from "@/shared/ui";
import { Data } from "../../model/payments.model";
import { PaymentFeaturesCard } from "./PaymentFeaturesCard";

const { Title } = Typography;

export const PaymentFeatures: React.FC<Data> = (props) => {
    const { pathname } = useLocation();
    return (
        <section>
            <Container>
                <Flex vertical gap={40}>
                    <Title level={2}>Преимущества</Title>
                    <Row gutter={[20, 20]}>
                        {props.items.map((item, index) => (
                            <Col xl={8} key={index}>
                                <PaymentFeaturesCard {...item} height={pathname.includes(APP_ROUTES.INSTALLMENT) ? 300 : 260} />
                            </Col>
                        ))}
                    </Row>
                </Flex>
            </Container>
        </section>
    );
};
