import { Button, Col, Flex, Form, Row, Typography } from "antd";
import { motion } from "framer-motion";
import { FlatCard, FlatCardLarge } from "@/features/flats";
import { LayoutIcon, LayoutOutlineIcon, RowsIcon, RowsOutlineIcon } from "@/shared/icons";
import { Container, CustomInputRange, CustomRooms, CustomSort } from "@/shared/ui";
import { useComplexFlats } from "../../model/useComplexFlats";

const { Title } = Typography;

export const ComplexFlats = () => {
    const { form, onFinish, view, setFlatView } = useComplexFlats();

    return (
        <section>
            <Container>
                <Flex vertical gap={40}>
                    <Title level={2}>Выберите квартиру</Title>
                    <Form name="complex-flats" form={form} onFinish={onFinish}>
                        <Row gutter={[20, 20]} align={"bottom"}>
                            <Col xl={6}>
                                <Form.Item name={1}>
                                    <CustomRooms rooms={[]} />
                                </Form.Item>
                            </Col>
                            <Col xl={6}>
                                <Form.Item name={2}>
                                    <CustomInputRange title="Стоимость" />
                                </Form.Item>
                            </Col>
                            <Col xl={6}>
                                <Form.Item name={3}>
                                    <CustomInputRange title="Площадь" />
                                </Form.Item>
                            </Col>
                            <Col xl={6}>
                                <Form.Item>
                                    <Button block type="primary" htmlType="submit">
                                        Показать 9 825 планировок
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                    <Flex vertical gap={20} className="padding-20 border-radius-m bg-gray-50">
                        <Flex align="center" justify="space-between">
                            <CustomSort />
                            <Flex align="center" gap={10}>
                                <Flex justify="center" align="center" onClick={() => setFlatView("layout")}>
                                    {view === "layout" ? <LayoutIcon className="color-green-500" /> : <LayoutOutlineIcon className="color-gray-500" />}
                                </Flex>
                                <Flex justify="center" align="center" onClick={() => setFlatView("rows")}>
                                    {view === "rows" ? (
                                        <RowsIcon className="color-green-500" onClick={() => setFlatView("rows")} />
                                    ) : (
                                        <RowsOutlineIcon className="color-gray-500" />
                                    )}
                                </Flex>
                            </Flex>
                        </Flex>
                        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} key={view}>
                            <Row gutter={[20, 20]}>
                                {view === "layout"
                                    ? [...Array(4)].map((_, index) => (
                                          <Col xl={6} key={index}>
                                              <FlatCard />
                                          </Col>
                                      ))
                                    : [...Array(4)].map((_, index) => (
                                          <Col span={24} key={index}>
                                              <FlatCardLarge />
                                          </Col>
                                      ))}
                            </Row>
                        </motion.span>
                    </Flex>
                </Flex>
            </Container>
        </section>
    );
};
