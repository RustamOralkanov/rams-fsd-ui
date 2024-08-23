import { Button, Col, Collapse, CollapseProps, Flex, Row, Typography } from "antd";
import { MinusIcon, PlusIcon } from "@/shared/icons";
import { Colors } from "@/shared/types/Colors";
import { Container } from "@/shared/ui";

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

export const CareerVacancies = () => {
    const financeQnaItems: CollapseProps["items"] = [...Array(4)]?.map((_, index) => ({
        key: index + "A",
        label: <Title level={4}>Power BI специалист</Title>,
        children: <Text>{text}</Text>,
        style: panelStyle,
    }));
    return (
        <section>
            <Container>
                <Flex vertical gap={40}>
                    <Title level={2}>Вакансии</Title>
                    <Row gutter={[20, 20]}>
                        <Col xl={6}>
                            <Flex vertical gap={15} className="payment-faq-buttons">
                                <Button type="primary" className="active">
                                    Все
                                </Button>
                                <Button type="primary">Отдел IT</Button>
                                <Button type="primary">Отдел HR</Button>
                                <Button type="primary">Бухгалтерия</Button>
                                <Button type="primary" disabled>
                                    Отдел продаж
                                </Button>
                            </Flex>
                        </Col>
                        <Col xl={18}>
                            <Collapse
                                items={financeQnaItems}
                                collapsible="header"
                                expandIconPosition={"end"}
                                bordered={false}
                                expandIcon={({ isActive }) => (isActive ? <MinusIcon /> : <PlusIcon />)}
                                className="app-collapse bg-white"
                            />
                        </Col>
                    </Row>
                </Flex>
            </Container>
        </section>
    );
};
