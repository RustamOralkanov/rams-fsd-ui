import common from "@styles/common.module.scss";
import { Col, Row, Flex, Typography, Form, FormProps, Image, Button, Input, Select } from "antd";
import { ChevronDownIcon } from "../../../../../shared/icons";
import { Colors } from "../../../../../shared/types/Colors";
import { CustomInputRange, CustomRooms } from "../../../../../shared/ui";

const { Text } = Typography;

export const AutoTradeIn = () => {
    const [form] = Form.useForm();

    const onFinish: FormProps["onFinish"] = (values) => {
        console.log("Success:", values);
    };

    return (
        <Row gutter={[20, 20]}>
            <Col xxl={8} xl={8}>
                <Flex vertical gap={30} className="border-radius-m bg-gray-50 padding-40">
                    <Flex vertical gap={10}>
                        <Text style={{ color: Colors.gray500 }}>
                            Rams Qazaqstan и Astana Motors представляют программу, благодаря которой Вы сможете обменять свою машину на новую квартиру!
                        </Text>
                    </Flex>

                    <Form name="auto" form={form} onFinish={onFinish}>
                        <Flex vertical gap={15}>
                            <Form.Item name="size" rules={[{ required: true }]}>
                                <CustomInputRange title="Общая площадь" />
                            </Form.Item>
                            <Row gutter={15}>
                                <Col span={12}>
                                    <Form.Item name="floor" rules={[{ required: true }]}>
                                        <Select placeholder="Этаж" suffixIcon={<ChevronDownIcon />} />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item name="facing" rules={[{ required: true }]}>
                                        <Select placeholder="Тип ремонта" suffixIcon={<ChevronDownIcon />} />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item name="rooms" rules={[{ required: true }]}>
                                <CustomRooms is_title={false} />
                            </Form.Item>
                            <Form.Item name="address" rules={[{ required: true }]}>
                                <Input placeholder="Введите адрес" />
                            </Form.Item>
                            <Form.Item>
                                <Button block type="primary" htmlType="submit">
                                    Получить оценку
                                </Button>
                            </Form.Item>
                        </Flex>
                    </Form>
                </Flex>
            </Col>
            <Col xxl={16} xl={16}>
                <Image
                    src="https://ramsqz.com/images/mortgage.jpg?32f2e763504f9121c21617dda13eb61e"
                    preview={false}
                    height={"100%"}
                    className={[common.cover, common["radius-20"]].join(" ")}
                />
            </Col>
        </Row>
    );
};
