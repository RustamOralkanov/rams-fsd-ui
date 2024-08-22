import { Button, Flex, Form, FormProps, Input, Typography } from "antd";
import { Link } from "react-router-dom";
import { usePhone } from "@/shared/hooks/usePhone";
import { Container } from "@/shared/ui";
import "./PartnersFeedback.scss";

const { Text, Title } = Typography;

export const PartnersFeedback = () => {
    const [form] = Form.useForm();
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
        <section className="partners-feedback">
            <Container>
                <Flex className="partners-feedback-wrapper" justify="space-between" align="center">
                    <Form name="partners" form={form} onFinish={onFinish} className="partners-feedback-form">
                        <Flex vertical gap={30}>
                            <Flex vertical gap={10}>
                                <Title level={4}>Сделайте шаг к успеху!</Title>
                                <Text className="color-gray-500">Заполните форму заявки, и мы свяжемся с вами в ближайшее время.</Text>
                            </Flex>
                            <Flex vertical gap={15}>
                                <Form.Item name={"name"} rules={[{ required: true }]}>
                                    <Input placeholder="Ваше имя" />
                                </Form.Item>
                                <Form.Item
                                    name={"phone"}
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
                                    <Input placeholder="Номер телефона" onChange={handlePhoneChange} />
                                </Form.Item>
                                <Form.Item>
                                    <Button block type="primary" htmlType="submit">
                                        Отправить
                                    </Button>
                                </Form.Item>
                                <Text className="color-gray-500 description-s">
                                    Нажимая кнопку «Отправить», Вы подтверждаете своё согласие с нашей{" "}
                                    <Link to={"/"} className="color-green-500">
                                        политикой конфиденциальности.
                                    </Link>
                                </Text>
                            </Flex>
                        </Flex>
                    </Form>
                    <Flex vertical className="partners-feedback-texts" gap={40}>
                        <Title level={1} className="color-white">
                            Мы с нетерпением ждем сотрудничества с вами, если вы
                        </Title>
                        <Text className="color-white">
                            Опытный риелтор, стремящийся к новым высотам в своей карьере. Агентство недвижимости, которое уже более года успешно действует на рынке и готово к новым
                            перспективам и достижениям.
                        </Text>
                    </Flex>
                </Flex>
            </Container>
        </section>
    );
};
