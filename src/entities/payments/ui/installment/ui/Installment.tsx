import common from "@styles/common.module.scss";
import { Col, Row, Flex, Typography, Form, FormProps, Image, Button } from "antd";
import { Colors } from "../../../../../shared/types/Colors";
import { CustomInputSingleRange, CustomSelectTags } from "../../../../../shared/ui";

const { Text, Title } = Typography;

export const Installment = () => {
    const [form] = Form.useForm();

    const onFinish: FormProps["onFinish"] = (values) => {
        console.log("Success:", values);
    };

    return (
        <Row gutter={[20, 20]}>
            <Col xxl={8} xl={8}>
                <Flex vertical gap={30} className="border-radius-m bg-gray-50 padding-40">
                    <Flex vertical gap={10}>
                        <Title level={3}>Рассчитайте рассрочку</Title>
                        <Text style={{ color: Colors.gray500 }}>Отправьте заявку прямо сейчас и мы свяжемся с вами в ближайшее время.</Text>
                    </Flex>

                    <Form name="installment" form={form} onFinish={onFinish}>
                        <Flex vertical gap={15}>
                            <Form.Item name="complex" rules={[{ required: true }]}>
                                <CustomSelectTags />
                            </Form.Item>
                            <Form.Item name="price" rules={[{ required: true }]}>
                                <CustomInputSingleRange title="Стоимость недвижимости" is_price />
                            </Form.Item>
                            <Form.Item name="deposite" rules={[{ required: true }]}>
                                <CustomInputSingleRange title="Первоначальный взнос" is_percent />
                            </Form.Item>
                            <Form.Item name="years" rules={[{ required: true }]}>
                                <CustomInputSingleRange title="Срок" is_year />
                            </Form.Item>
                            <Form.Item style={{ marginTop: 15 }}>
                                <Button block type="primary" htmlType="submit">
                                    Рассчитать
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
