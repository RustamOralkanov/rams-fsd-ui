import { Col, Row, Flex, Typography, Form, FormProps, Image, Button } from "antd";
import { Colors } from "../../../../../shared/types/Colors";
import common from "../../../../../shared/styles/common.module.scss";
import { CustomInputSingleRange } from "../../../../../shared/ui";

const { Text, Title } = Typography;

export const Mortgage = () => {
    const [form] = Form.useForm();

    const onFinish: FormProps["onFinish"] = (values) => {
        console.log("Success:", values);
    };

    return (
        <Row gutter={[20, 20]}>
            <Col xxl={6} xl={6}>
                <Flex vertical gap={30}>
                    <Text style={{ color: Colors.gray500 }}>Приобрести квартиру в один клик! Получите полное сопровождение от специалистов по ипотеке от RAMS Qazaqstan</Text>
                    <Form name="mortgage" form={form} onFinish={onFinish}>
                        <Flex vertical gap={15}>
                            <Form.Item name="price" rules={[{ required: true }]}>
                                <CustomInputSingleRange title="Стоимость недвижимости" is_price />
                            </Form.Item>
                            <Form.Item name="deposite" rules={[{ required: true }]}>
                                <CustomInputSingleRange title="Первоначальный взнос" is_percent />
                            </Form.Item>
                            <Form.Item name="years" rules={[{ required: true }]}>
                                <CustomInputSingleRange title="Срок" is_year />
                            </Form.Item>
                            <Flex justify="center" align="center">
                                <Title level={4} style={{ margin: "15px 0" }}>
                                    от 220 000 ₸/мес.
                                </Title>
                            </Flex>
                            <Form.Item>
                                <Button block type="primary" htmlType="submit">
                                    Оставить заявку
                                </Button>
                            </Form.Item>
                        </Flex>
                    </Form>
                </Flex>
            </Col>
            <Col xxl={18} xl={18}>
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
