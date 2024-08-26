import { Form, Button, Typography, Input, FormProps, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { usePhone } from "../../../../shared/hooks/usePhone";
import { Colors } from "../../../../shared/types/Colors";

const { Text } = Typography;

export const ConsultationForm = () => {
    const [form] = Form.useForm<{ name: string; phone: string }>();
    const { formatPhoneNumber, validatePhoneNumber } = usePhone();

    const onFinish: FormProps["onFinish"] = (values) => {
        console.log("Success:", values);
        form.resetFields();
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        form.setFieldsValue({ phone: formatPhoneNumber(value) });
    };

    return (
        <Form name="consultation" form={form} onFinish={onFinish}>
            <Row gutter={[15, 15]}>
                <Col xl={24}>
                    <Form.Item name="name" rules={[{ required: true, message: "Пожалуйста, введите имя" }]}>
                        <Input placeholder="Имя" />
                    </Form.Item>
                </Col>
                <Col xl={24}>
                    <Form.Item
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: "",
                            },
                            {
                                validator: validatePhoneNumber,
                            },
                        ]}
                    >
                        <Input placeholder="Телефон" onChange={handlePhoneChange} />
                    </Form.Item>
                </Col>
                <Col xl={24} style={{ lineHeight: 1 }}>
                    <Text className="description-s color-gray-100">
                        Нажимая кнопку «Отправить», Вы подтверждаете своё согласие с нашей{" "}
                        <Link to={"/"} style={{ color: Colors.white }}>
                            политикой конфиденциальности.
                        </Link>
                    </Text>
                </Col>
                <Col xl={24}>
                    <Form.Item>
                        <Button htmlType="submit">Отправить</Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};
