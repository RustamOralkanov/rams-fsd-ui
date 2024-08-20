import { Button, Col, Collapse, CollapseProps, Flex, Row, Typography } from "antd";
import { MinusIcon, PlusIcon } from "../../../../../shared/icons";
import { Colors } from "../../../../../shared/types/Colors";
import { Container } from "../../../../../shared/ui";
import "./PaymentFAQ.scss";

const { Title, Text } = Typography;

const panelStyle: React.CSSProperties = {
    marginBottom: 20,
    background: Colors.gray,
    borderRadius: 10,
    border: "none",
};

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export const PaymentFAQ = () => {
    const financeQnaItems: CollapseProps["items"] = [...Array(4)]?.map((_, index) => ({
        key: index + "A",
        label: <Title level={4}>Как я могу подать заявку на ипотеку?</Title>,
        children: <Text>{text}</Text>,
        style: panelStyle,
    }));

    return (
        <section className="payment-faq">
            <Container>
                <Flex vertical gap={40}>
                    <Title level={2}>Мы знаем ответы на ваши вопросы</Title>
                    <Row gutter={[20, 20]}>
                        <Col xl={6}>
                            <Flex vertical gap={15} className="payment-faq-buttons">
                                <Button type="primary" className="active">
                                    Процес сделки и оплаты
                                </Button>
                                <Button type="primary">Заселение. Сапровождение</Button>
                                <Button type="primary">Выбор проекта и квартиры</Button>
                                <Button type="primary">Другие вопросы</Button>
                            </Flex>
                        </Col>
                        <Col xl={18}>
                            <Collapse
                                items={financeQnaItems}
                                collapsible="header"
                                expandIconPosition={"end"}
                                bordered={false}
                                style={{ backgroundColor: Colors.white }}
                                expandIcon={({ isActive }) => (isActive ? <MinusIcon /> : <PlusIcon />)}
                                className="app-collapse"
                            />
                        </Col>
                    </Row>
                </Flex>
            </Container>
        </section>
    );
};
