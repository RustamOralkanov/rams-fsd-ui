import { Form, Button, Typography, Input, FormProps, Flex } from "antd";
import { Colors } from "../../../../shared/types/Colors";
import { Link } from "react-router-dom";
import { usePhone } from "../../../../shared/hooks/usePhone";

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
            <Flex vertical gap={10}>
                <Form.Item name="name" rules={[{ required: true, message: "Пожалуйста, введите имя" }]}>
                    <Input placeholder="Имя" />
                </Form.Item>
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
                <Text style={{ fontSize: 10, color: Colors.gray100, fontWeight: 400 }}>
                    Нажимая кнопку «Отправить», Вы подтверждаете своё согласие с нашей{" "}
                    <Link to={"/"} style={{ color: Colors.white }}>
                        политикой конфиденциальности.
                    </Link>
                </Text>
                <Form.Item>
                    <Button htmlType="submit">Отправить</Button>
                </Form.Item>
            </Flex>
        </Form>
    );
};
